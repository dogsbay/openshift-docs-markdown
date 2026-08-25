{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring high availability replicas for Knative Eventing {id="serverless-config-replicas-eventing_{{ context }}"}

High availability (HA) is available by default for the Knative Eventing `eventing-controller`, `eventing-webhook`, `imc-controller`, `imc-dispatcher`, and `mt-broker-controller` components, which are configured to have two replicas each by default. You can change the number of replicas for these components by modifying the `spec.high-availability.replicas` value in the `KnativeEventing` custom resource (CR).


:::note

For Knative Eventing, the `mt-broker-filter` and `mt-broker-ingress` deployments are not scaled by HA. If multiple deployments are needed, scale these components manually.

:::


**Prerequisites**

{% if openshift_enterprise %}
*   You have access to an {{ product_title }} account with cluster administrator access.
{% endif %}

{% if openshift_dedicated or openshift_rosa %}
*   You have access to an {{ product_title }} account with cluster administrator or dedicated administrator access.
{% endif %}
*   The {{ ServerlessOperatorName }} and Knative Eventing are installed on your cluster.

**Procedure**

1.  In the {{ product_title }} web console **Administrator** perspective, navigate to **OperatorHub** -> **Installed Operators**.
1.  Select the `knative-eventing` namespace.
1.  Click **Knative Eventing** in the list of **Provided APIs** for the {{ ServerlessOperatorName }} to go to the **Knative Eventing** tab.
1.  Click **knative-eventing**, then go to the **YAML** tab in the **knative-eventing** page.
    ![Knative Eventing YAML](/_assets/images/eventing-YAML-HA.png)
1.  Modify the number of replicas in the `KnativeEventing` CR:
    ```yaml title="Example YAML"
    apiVersion: operator.knative.dev/v1beta1
    kind: KnativeEventing
    metadata:
      name: knative-eventing
      namespace: knative-eventing
    spec:
      high-availability:
        replicas: 3
    ```