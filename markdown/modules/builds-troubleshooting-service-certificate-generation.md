{%- set _mod_docs_content_type = "PROCEDURE" %}
# Service certificate generation failure {id="builds-troubleshooting-service-certificate-generation_{{ context }}"}

If your request for access to resources is denied:


Issue
:   If a service certificate generation fails with (service’s `service.beta.openshift.io/serving-cert-generation-error` annotation contains):

```terminal title="Example output"
secret/ssl-key references serviceUID 62ad25ca-d703-11e6-9d6f-0e9c0057b608, which does not match 77b6dd80-d716-11e6-9d6f-0e9c0057b60
```


Resolution
:   The service that generated the certificate no longer exists, or has a different `serviceUID`. You must force certificates regeneration by removing the old secret, and clearing the following annotations on the service: `service.beta.openshift.io/serving-cert-generation-error` and `service.beta.openshift.io/serving-cert-generation-error-num`. To clear the annotations, enter the following commands:
    ```terminal
    $ oc delete secret <secret_name>
    ```
    ```terminal
    $ oc annotate service <service_name> service.beta.openshift.io/serving-cert-generation-error-
    ```
    ```terminal
    $ oc annotate service <service_name> service.beta.openshift.io/serving-cert-generation-error-num-
    ```

    :::note


    The command removing an annotation has a `-` after the annotation name to be
    removed.
    
    :::