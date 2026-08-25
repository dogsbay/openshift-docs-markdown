{%- set _mod_docs_content_type = "PROCEDURE" %}
# Removing an unused certificate authority from the bundle {id="removing-unused-ca-bundle_{{ context }}"}

After a manual etcd or metrics signer rotation, delete the `etcd-ca-bundle` or `etcd-metrics-ca-bundl` as appropriate. When the cluster reconciles, unused certificate authority (CA) keys are removed. This ensures that components only trust the current signer. {._abstract}

**Procedure**

*   Delete the key by running the following command:
    ```terminal
    $ oc delete configmap -n openshift-etcd etcd-ca-bundle
    ```

**Verification**

*   Wait for the static pod rollout by running the following command. The bundle regenerates with the current signer certificate and all unknown or unused keys are deleted.
    ```terminal
    $ oc adm wait-for-stable-cluster --minimum-stable-period 2m
    ```