{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the Custom Metrics Autoscaler Operator {id="nodes-cma-autoscaling-custom-uninstalling_{{ context }}"}

Use the following procedure to remove the custom metrics autoscaler from your {{ product_title }} cluster.

**Prerequisites**

*   The Custom Metrics Autoscaler Operator must be installed.

**Procedure**

1.  In the {{ product_title }} web console, click **Ecosystem** -> **Installed Operators**.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Switch to the **openshift-keda** project.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Switch to the **keda** project.
{% endif %}
1.  Remove the `KedaController` custom resource.
    1.  Find the **CustomMetricsAutoscaler**  Operator and click the **KedaController** tab.
    1.  Find the custom resource, and then click **Delete KedaController**.
    1.  Click **Uninstall**.
1.  Remove the Custom Metrics Autoscaler Operator:
    1.  Click **Ecosystem** -> **Installed Operators**.
    1.  Find the **CustomMetricsAutoscaler**  Operator and click the Options menu {{ kebab }} and select **Uninstall Operator**.
    1.  Click **Uninstall**.
1.  Optional: Use the OpenShift CLI to remove the custom metrics autoscaler components:
    1.  Delete the custom metrics autoscaler CRDs:
        *   `clustertriggerauthentications.keda.sh`
        *   `kedacontrollers.keda.sh`
        *   `scaledjobs.keda.sh`
        *   `scaledobjects.keda.sh`
        *   `triggerauthentications.keda.sh`
        ```terminal
        $ oc delete crd clustertriggerauthentications.keda.sh kedacontrollers.keda.sh scaledjobs.keda.sh scaledobjects.keda.sh triggerauthentications.keda.sh
        ```

        Deleting the CRDs removes the associated roles, cluster roles, and role bindings. However, there might be a few cluster roles that must be manually deleted.
    1.  List any custom metrics autoscaler cluster roles:
        ```terminal
        $ oc get clusterrole | grep keda.sh
        ```
    1.  Delete the listed custom metrics autoscaler cluster roles. For example:
        ```terminal
        $ oc delete clusterrole.keda.sh-v1alpha1-admin
        ```
    1.  List any custom metrics autoscaler cluster role bindings:
        ```terminal
        $ oc get clusterrolebinding | grep keda.sh
        ```
    1.  Delete the listed custom metrics autoscaler cluster role bindings. For example:
        ```terminal
        $ oc delete clusterrolebinding.keda.sh-v1alpha1-admin
        ```
1.  Delete the custom metrics autoscaler project:
    {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    ```terminal
    $ oc delete project openshift-keda
    ```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    ```terminal
    $ oc delete project keda
    ```
{% endif %}
1.  Delete the Cluster Metric Autoscaler Operator:
    {%- if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
    ```terminal
    $ oc delete operator/openshift-custom-metrics-autoscaler-operator.openshift-keda
    ```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
    ```terminal
    $ oc delete operator/openshift-custom-metrics-autoscaler-operator.keda
    ```
{% endif %}