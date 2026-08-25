{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a sample EventListener resource using a secure HTTPS connection {id="op-sample-eventlistener-resource_{{ context }}"}

This section uses the [pipelines-tutorial](https://github.com/openshift/pipelines-tutorial) example to demonstrate creation of a sample EventListener resource using a secure HTTPS connection.

**Procedure**

1.  Create the `TriggerBinding` resource from the YAML file available in the pipelines-tutorial repository:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/master/03_triggers/01_binding.yaml
    ```
1.  Create the `TriggerTemplate` resource from the YAML file available in the pipelines-tutorial repository:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/master/03_triggers/02_template.yaml
    ```
1.  Create the `Trigger` resource directly from the pipelines-tutorial repository:
    ```terminal
    $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/master/03_triggers/03_trigger.yaml
    ```
1.  Create an `EventListener` resource using a secure HTTPS connection:
    1.  Add a label to enable the secure HTTPS connection to the `Eventlistener` resource:
        ```terminal
        $ oc label namespace <ns-name> operator.tekton.dev/enable-annotation=enabled
        ```
    1.  Create the `EventListener` resource from the YAML file available in the pipelines-tutorial repository:
        ```terminal
        $ oc create -f https://raw.githubusercontent.com/openshift/pipelines-tutorial/master/03_triggers/04_event_listener.yaml
        ```
    1.  Create a route with the re-encrypted TLS termination:
        ```terminal
        $ oc create route reencrypt --service=<svc-name> --cert=tls.crt --key=tls.key --ca-cert=ca.crt --hostname=<hostname>
        ```