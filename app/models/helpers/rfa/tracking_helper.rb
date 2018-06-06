# frozen_string_literal: true

class Helpers::Rfa::TrackingHelper < Helpers::ModelHelperBase
  def model_class
    Rfa::Tracking
  end

  def create_tracking(application_id)
    Rfa::Tracking.create_tracking(auth_header, application_id)
  end

  def find_by_id(id, application_id)
    Rfa::Tracking.find_by_id(auth_header, id, application_id)
  end
end
