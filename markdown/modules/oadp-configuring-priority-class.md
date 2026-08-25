{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a priority class for node agent and Velero pods {id="oadp-configuring-priority-class_{{ context }}"}

Configure a `priorityClassName` field for the node agent and Velero pods by editing the `DataProtectionApplication` (DPA) custom resource (CR). This helps you ensure that the Kubernetes scheduler prioritizes {{ oadp_short }} pods during resource contention. {._abstract}

By setting a priority class, you ensure that critical {{ oadp_short }} pods are scheduled first after events such as worker node outages, when user workloads might otherwise consume available resources.

**Prerequisites**

*   The {{ oadp_short }} Operator is installed.
*   A DPA CR is configured.
*   A `PriorityClass` object is created in the cluster.

**Procedure**

1.  In your DPA CR, configure the `priorityClassName` field for the node agent, Velero, or both, in the `podConfig` object as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: <dpa_name>
      namespace: openshift-adp
    spec:
    # ...
      configuration:
        nodeAgent:
          enable: true
          uploaderType: kopia
          podConfig:
            priorityClassName: <priority_class_name>
        velero:
          podConfig:
            priorityClassName: <priority_class_name>
    ```

    where:

    `<priority_class_name>`
    :   Specifies the name of an existing `PriorityClass` to apply to the pods managed by this `podConfig` object. For example, `system-cluster-critical`.

1.  Apply the `DataProtectionApplication` CR by running the following command:
    ```terminal
    $ oc apply -f <dpa_file_name>
    ```

**Verification**

1.  Verify that the node agent daemon set pods have the correct priority class by running the following command:
    ```terminal
    $ oc get pods -n openshift-adp -l name=node-agent -o jsonpath='{range .items[*]}{.metadata.name}{" "}{.spec.priorityClassName}{"\n"}{end}'
    ```
    ```terminal
    node-agent-xxxxx <priority_class_name>
    node-agent-yyyyy <priority_class_name>
    ```
1.  Verify that the Velero deployment pods have the correct priority class by running the following command:
    ```terminal
    $ oc get pods -n openshift-adp -l app.kubernetes.io/name=velero -o jsonpath='{range .items[*]}{.metadata.name}{" "}{.spec.priorityClassName}{"\n"}{end}'
    ```
    ```terminal
    velero-xxxxx <priority_class_name>
    ```