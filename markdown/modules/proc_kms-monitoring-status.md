{%- set _mod_docs_content_type = "PROCEDURE" %}
# Monitor KMS encryption status {id="kms-monitoring-status_{{ context }}"}

You can monitor KMS encryption status by using Operator and API server logs to verify successful configuration and detect issues. {._abstract}

**Procedure**

1.  Check the kube-apiserver operator logs for KMS-related events by entering the following command:
    ```terminal
    $ oc logs -n openshift-kube-apiserver-operator deploy/kube-apiserver-operator | grep -i kms
    ```
1.  View API server logs for KMS-related events by entering the following command:
    ```terminal
    $ oc logs -n openshift-kube-apiserver -l apiserver=true --tail=100 | grep -i kms
    ```
1.  Verify the KMS encryption configuration by entering the following command:
    ```terminal
    $ oc get apiserver cluster -o jsonpath='{.spec.encryption}' | jq
    ```

**Additional resources**
{._additional-resources}

*   [Kubernetes KMS provider documentation](https://kubernetes.io/docs/tasks/administer-cluster/kms-provider/)