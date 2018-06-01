class Helpers::Rfa::TrackingHelper  < Helpers::ModelHelperBase

  def model_class
    Rfa::Tracking
  end

  def create_tracking(application_id)
    Rfa::Tracking.create_tracking(auth_header, application_id)
  end
end
