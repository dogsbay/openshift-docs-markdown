{%- set _mod_docs_content_type = "PROCEDURE" %}
# Validating the generation of configuration policy CRs {id="ztp-validating-the-generation-of-configuration-policy-crs_{{ context }}"}

`Policy` custom resources (CRs) are generated in the same namespace as the `{{ policy_gen_cr }}`{minja} from which they are created. The same troubleshooting flow applies to all policy CRs generated from a `{{ policy_gen_cr }}`{minja} regardless of whether they are `ztp-common`, `ztp-group`, or `ztp-site` based, as shown using the following commands: {._abstract}

```terminal
$ export NS=<namespace>
```

```terminal
$ oc get policy -n $NS
```

The expected set of policy-wrapped CRs should be displayed.

If the policies failed synchronization, use the following troubleshooting steps.

**Procedure**

1.  To display detailed information about the policies, run the following command:
    ```terminal
    $ oc describe -n openshift-gitops application policies
    ```
1.  Check for `Status: Conditions:` to show the error logs. For example, setting an invalid `sourceFile` entry to `fileName:` generates the error shown below:
    ```text
    Status:
      Conditions:
        Last Transition Time:  2021-11-26T17:21:39Z
        Message:               rpc error: code = Unknown desc = `kustomize build /tmp/https___git.com/ran-sites/policies/ --enable-alpha-plugins` failed exit status 1: 2021/11/26 17:21:40 Error could not find test.yaml under source-crs/: no such file or directory Error: failure in plugin configured via /tmp/kust-plugin-config-52463179; exit status 1: exit status 1
        Type:  ComparisonError
    ```
1.  Check for `Status: Sync:`. If there are log errors at `Status: Conditions:`, the `Status: Sync:` shows `Unknown` or `Error`:
    ```text
    Status:
      Sync:
        Compared To:
          Destination:
            Namespace:  policies-sub
            Server:     https://kubernetes.default.svc
          Source:
            Path:             policies
            Repo URL:         https://git.com/ran-sites/policies/.git
            Target Revision:  master
        Status:               Error
    ```
1.  When {{ rh_rhacm_first }} recognizes that policies apply to a `ManagedCluster` object, the policy CR objects are applied to the cluster namespace. Check to see if the policies were copied to the cluster namespace:
    ```terminal
    $ oc get policy -n $CLUSTER
    ```
    ```terminal title="Example output"
    NAME                                         REMEDIATION ACTION   COMPLIANCE STATE   AGE
    ztp-common.common-config-policy              inform               Compliant          13d
    ztp-common.common-subscriptions-policy       inform               Compliant          13d
    ztp-group.group-du-sno-config-policy         inform               Compliant          13d
    ztp-group.group-du-sno-validator-du-policy   inform               Compliant          13d
    ztp-site.example-sno-config-policy           inform               Compliant          13d
    ```

    {{ rh_rhacm }} copies all applicable policies into the cluster namespace. The copied policy names have the format: `<{{ policy_gen_cr }}.Namespace>.<{{ policy_gen_cr }}.Name>-<policyName>`{minja}.
1.  Check the placement rule for any policies not copied to the cluster namespace. The `matchSelector` in the `{{ placement_rule_cr }}`{minja} for those policies should match labels on the `ManagedCluster` object:
    ```terminal {minja}
    $ oc get {{ placement_rule_cr }} -n $NS
    ```
1.  Note the `{{ placement_rule_cr }}`{minja} name appropriate for the missing policy, common, group, or site, using the following command:
    ```terminal {minja}
    $ oc get {{ placement_rule_cr }} -n $NS <placement_rule_name> -o yaml
    ```
    *   The status-decisions should include your cluster name.
    *   The key-value pair of the `matchSelector` in the spec must match the labels on your managed cluster.
1.  Check the labels on the `ManagedCluster` object by using the following command:
    ```terminal
    $ oc get ManagedCluster $CLUSTER -o jsonpath='{.metadata.labels}' | jq
    ```
1.  Check to see what policies are compliant by using the following command:
    ```terminal
    $ oc get policy -n $CLUSTER
    ```

    If the `Namespace`, `OperatorGroup`, and `Subscription` policies are compliant but the Operator configuration policies are not, it is likely that the Operators did not install on the managed cluster. This causes the Operator configuration policies to fail to apply because the CRD is not yet applied to the spoke.