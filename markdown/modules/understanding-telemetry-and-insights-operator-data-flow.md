{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding Telemetry and {{ insights_operator }} data flow {id="understanding-telemetry-and-insights-operator-data-flow_{{ context }}"}

The Telemeter Client collects selected time series data from the Prometheus API. The time series data is uploaded to api.openshift.com every four minutes and thirty seconds for processing. {._abstract}

The {{ insights_operator }} gathers selected data from the Kubernetes API and the Prometheus API into an archive. The archive is uploaded to {{ cluster_manager_url }} every two hours for processing. The {{ insights_operator }} also downloads the latest {{ red_hat_lightspeed }} analysis from {{ cluster_manager_url }}. This is used to populate the **{{ red_hat_lightspeed }} status** pop-up that is included in the **Overview** page in the {{ product_title }} web console.

All of the communication with Red Hat occurs over encrypted channels by using Transport Layer Security (TLS) and mutual certificate authentication. All of the data is encrypted in transit and at rest.

Access to the systems that handle customer data is controlled through multi-factor authentication and strict authorization controls. Access is granted on a need-to-know basis and is limited to required operations.


Telemetry and {{ insights_operator }} data flow

:   ![Telemetry and {{ insights_operator }} data flow](/_assets/images/telmetry-and-insights-operator-data-flow.png)