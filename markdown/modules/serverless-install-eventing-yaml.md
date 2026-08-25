{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing Knative Eventing by using YAML {id="serverless-install-eventing-yaml_{{ context }}"}

After you install the {{ ServerlessOperatorName }}, you can install Knative Eventing by using the default settings, or configure more advanced settings in the `KnativeEventing` custom resource (CR). You can use the following procedure to install Knative Eventing by using YAML files and the `oc` CLI.

**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}

*   You have installed the {{ ServerlessOperatorName }}.
*   Install the OpenShift CLI (`oc`).

**Procedure**

1.  Create a file named `eventing.yaml`.
1.  Copy the following sample YAML into `eventing.yaml`:
    ```yaml
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    metadata:
        name: knative-eventing
        namespace: knative-eventing
    ```
1.  Optional. Make any changes to the YAML that you want to implement for your Knative Eventing deployment.
1.  Apply the `eventing.yaml` file by entering:
    ```terminal
    $ oc apply -f eventing.yaml
    ```

**Verification**

1.  Verify the installation is complete by entering the following command and observing the output:
    ```terminal
    $ oc get knativeeventing.operator.knative.dev/knative-eventing \
      -n knative-eventing \
      --template='{{range .status.conditions}}{{printf "%s=%s\n" .type .status}}{{end}}'
    ```
    ```terminal title="Example output"
    InstallSucceeded=True
    Ready=True
    ```

    :::note

    It may take a few seconds for the Knative Eventing resources to be created.
    
    :::

1.  If the conditions have a status of `Unknown` or `False`, wait a few moments and then check again after you have confirmed that the resources have been created.
1.  Check that the Knative Eventing resources have been created by entering:
    ```terminal
    $ oc get pods -n knative-eventing
    ```
    ```terminal title="Example output"
    NAME                                   READY   STATUS    RESTARTS   AGE
    broker-controller-58765d9d49-g9zp6     1/1     Running   0          7m21s
    eventing-controller-65fdd66b54-jw7bh   1/1     Running   0          7m31s
    eventing-webhook-57fd74b5bd-kvhlz      1/1     Running   0          7m31s
    imc-controller-5b75d458fc-ptvm2        1/1     Running   0          7m19s
    imc-dispatcher-64f6d5fccb-kkc4c        1/1     Running   0          7m18s
    ```