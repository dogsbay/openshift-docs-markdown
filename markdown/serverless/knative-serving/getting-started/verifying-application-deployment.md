{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Verifying your serverless application deployment {id="verifying-application-deployment"}
{%- set context = "verifying-application-deployment" %}

To verify that your serverless application has been deployed successfully, you must get the application URL created by Knative, and then send a request to that URL and observe the output. {{ ServerlessProductName }} supports the use of both HTTP and HTTPS URLs, however the output from `oc get ksvc` always prints URLs using the `http://` format.

{% leveloffset +1 %}{% include "./modules/verifying-serverless-app-deployment.md" %}{% endleveloffset %}