{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the descheduler interval {id="nodes-descheduler-configuring-interval_{{ context }}"}

You can configure the amount of time between descheduler runs. The default is 3600 seconds (one hour). {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{% endif %}

**Procedure**

1.  Edit the `KubeDescheduler` object:
    ```terminal
    $ oc edit kubedeschedulers.operator.openshift.io cluster -n openshift-kube-descheduler-operator
    ```
1.  Update the `deschedulingIntervalSeconds` field to the required value:
    ```yaml
    apiVersion: operator.openshift.io/v1
    kind: KubeDescheduler
    metadata:
      name: cluster
      namespace: openshift-kube-descheduler-operator
    spec:
      deschedulingIntervalSeconds: 3600
    ...
    ```

    Set the `spec.deschedulingIntervalSeconds` field to the number of seconds you want between descheduler runs. A value of `0` in this field runs the descheduler once and exits.
1.  Save the file to apply the changes.