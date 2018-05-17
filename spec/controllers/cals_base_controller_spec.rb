require 'rspec'
require 'rails_helper'

describe CalsBaseController do
  controller do
    def custom
      render json: true, status: :ok
    end
  end

  before do
    routes.draw { get 'custom' => 'cals_base#custom' }
  end

  it 'sets token when token is empty' do
    allow(Cwds::Authentication).to receive(:token_generation).with('dcba', AUTHENTICATION_API_BASE_URL).and_return('abcd')
    allow(Cwds::Authentication).to receive(:token_validation).with('abcd', AUTHENTICATION_API_BASE_URL).and_return(true)

    process :custom, method: :get, params: {accessCode: 'dcba'}
    expect(session['token']).to eq('abcd')
  end

  it 'redirects to invalid login page when token invalid' do
    allow(Cwds::Authentication).to receive(:token_generation).with('dcba', AUTHENTICATION_API_BASE_URL).and_return('abcd')
    allow(Cwds::Authentication).to receive(:token_validation).with('abcd', AUTHENTICATION_API_BASE_URL).and_return(false)
    process :custom, method: :get, params: {accessCode: 'dcba'}
    expect(response).to render_template('errors/invalid_login_page')
  end


  it 'redirects to invalid login page when token invalid' do
    allow(Cwds::Authentication).to receive(:token_generation).with('', AUTHENTICATION_API_BASE_URL).and_return(nil)
  #  allow(Cwds::Authentication).to receive(:token_validation).with('abcd', AUTHENTICATION_API_BASE_URL).and_return(false)
    process :custom, method: :get, params: {accessCode: nil}
    expect(response).to render_template('errors/invalid_login_page')
  end




end
