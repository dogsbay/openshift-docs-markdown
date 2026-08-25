{%- set _mod_docs_content_type = "PROCEDURE" %}
# Create a route to use for AI queries in {{ microshift_short }} {id="microshift-rhoai-create-route_{{ context }}"}

You can create a route so that your AI model can receive queries and give output by using the `oc expose svc` command or creating a definition in a YAML file and apply it. {._abstract}

**Prerequisites**

*   You have root user access to your machine.
*   The {{ oc_first }} is installed.

**Procedure**

*   Create a route using the following command:
    ```terminal
    $ oc expose svc -n ai-demo ovms-resnet50-predictor
    ```
    ```terminal title="Example output"
    route.route.openshift.io/ovms-resnet50-predictor exposed
    ```

**Verification**

*   Verify that the route you created exists by running the following command:
    ```terminal
    $ oc get route -n ai-demo
    ```
    ```terminal title="Example output"
    NAME                      HOST                                               ADMITTED   SERVICE                   TLS
    ovms-resnet50-predictor   ovms-resnet50-predictor-ai-demo.apps.example.com   True       ovms-resnet50-predictor
    ```