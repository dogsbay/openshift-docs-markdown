{%- set _mod_docs_content_type = "PROCEDURE" %}
# Resolving a stuck OVN rollout {id="hcp-ts-nodes-not-ready_{{ context }}"}

After you change an existing configuration, the OVN component rollout might take a long time or encounter issues. {._abstract}

**Procedure**

1.  Check the status of the `ovnkube-node` DaemonSet rollout by entering the following command:
    ```terminal
    $ oc rollout status daemonset/ovnkube-node \
      -n openshift-ovn-kubernetes \
      --kubeconfig=hosted-kubeconfig
    ```
1.  Check the pod logs for errors by entering the following command:
    ```terminal
    $ oc logs -n openshift-ovn-kubernetes \
      -l app=ovnkube-node \
      --kubeconfig=hosted-kubeconfig
    ```

    If the rollout is stuck, you might need to revert the configuration change.