{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring policy compliance evaluation timeouts for {{ policy_gen_cr }} CRs {id="ztp-configuring-pgt-compliance-eval-timeouts_{{ context }}"}

Use {{ rh_rhacm_first }} installed on a hub cluster to monitor and report on whether your managed clusters are compliant with applied policies. {{ rh_rhacm }} uses policy templates to apply predefined policy controllers and policies. Policy controllers are Kubernetes custom resource definition (CRD) instances. {._abstract}

You can override the default policy evaluation intervals with `{{ policy_gen_cr }}`{minja} custom resources (CRs). You configure duration settings that define how long a `ConfigurationPolicy` CR can be in a state of policy compliance or non-compliance before {{ rh_rhacm }} re-evaluates the applied cluster policies.

The {{ ztp_first }} policy generator generates `ConfigurationPolicy` CR policies with pre-defined policy evaluation intervals. The default value for the `noncompliant` state is 10 seconds. The default value for the `compliant` state is 10 minutes. To disable the evaluation interval, set the value to `never`.

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.
*   You have created a Git repository where you manage your custom site configuration data.

**Procedure**

1.  To configure the evaluation interval for all policies in a `{{ policy_gen_cr }}`{minja} CR, set appropriate `compliant` and `noncompliant` values for the `evaluationInterval` field.
For example:
    ```yaml {minja}
    {% if policy-gen-cr == "PolicyGenTemplate" %}
    spec:
      evaluationInterval:
        compliant: 30m
        noncompliant: 20s
    {% endif %}
    {% if policy-gen-cr == "PolicyGenerator" %}
    policyDefaults:
      evaluationInterval:
        compliant: 30m
        noncompliant: 45s
    {% endif %}
    ```

    :::note

    You can also set `compliant` and `noncompliant` fields to `never` to stop evaluating the policy after it reaches particular compliance state.
    
    :::

1.  To configure the evaluation interval for an individual policy object in a `{{ policy_gen_cr }}`{minja} CR, add the `evaluationInterval` field and set appropriate values.
For example:
    ```yaml {minja}
    {% if policy-gen-cr == "PolicyGenTemplate" %}
    spec:
      sourceFiles:
        - fileName: SriovSubscription.yaml
          policyName: "sriov-sub-policy"
          evaluationInterval:
            compliant: never
            noncompliant: 10s
    {% endif %}
    {% if policy-gen-cr == "PolicyGenerator" %}
    policies:
      - name: "sriov-sub-policy"
        manifests:
          - path: "SriovSubscription.yaml"
            evaluationInterval:
              compliant: never
              noncompliant: 10s
    {% endif %}
    ```
1.  Commit the `{{ policy_gen_cr }}`{minja} CRs files in the Git repository and push your changes.

**Verification**

Check that the managed spoke cluster policies are monitored at the expected intervals.

1.  Log in as a user with `cluster-admin` privileges on the managed cluster.
1.  Get the pods that are running in the `open-cluster-management-agent-addon` namespace. Run the following command:
    ```terminal
    $ oc get pods -n open-cluster-management-agent-addon
    ```

    The following example shows the output:
    ```terminal
    NAME                                         READY   STATUS    RESTARTS        AGE
    config-policy-controller-858b894c68-v4xdb    1/1     Running   22 (5d8h ago)   10d
    ```
1.  Check the applied policies are being evaluated at the expected interval in the logs for the `config-policy-controller` pod:
    ```terminal
    $ oc logs -n open-cluster-management-agent-addon config-policy-controller-858b894c68-v4xdb
    ```

    The following example shows the output:
    ```terminal
    2022-05-10T15:10:25.280Z       info   configuration-policy-controller controllers/configurationpolicy_controller.go:166      Skipping the policy evaluation due to the policy not reaching the evaluation interval  {"policy": "compute-1-config-policy-config"}
    2022-05-10T15:10:25.280Z       info   configuration-policy-controller controllers/configurationpolicy_controller.go:166      Skipping the policy evaluation due to the policy not reaching the evaluation interval  {"policy": "compute-1-common-compute-1-catalog-policy-config"}
    ```