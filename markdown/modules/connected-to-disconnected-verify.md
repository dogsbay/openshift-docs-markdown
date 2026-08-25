{%- set _mod_docs_content_type = "PROCEDURE" %}
# Ensure applications continue to work {id="connected-to-disconnected-verify_{{ context }}"}

Before disconnecting the cluster from the network, ensure that your cluster is working as expected and all of your applications are working as expected. {._abstract}

**Procedure**

1.  Use the following commands to check the status of your cluster:
    *   Ensure your pods are running:
        ```terminal
        $ oc get pods --all-namespaces
        ```
        ```terminal title="Example output"
        NAMESPACE                                          NAME                                                          READY   STATUS      RESTARTS   AGE
        kube-system                                        apiserver-watcher-ci-ln-47ltxtb-f76d1-mrffg-master-0          1/1     Running     0          39m
        kube-system                                        apiserver-watcher-ci-ln-47ltxtb-f76d1-mrffg-master-1          1/1     Running     0          39m
        kube-system                                        apiserver-watcher-ci-ln-47ltxtb-f76d1-mrffg-master-2          1/1     Running     0          39m
        openshift-apiserver-operator                       openshift-apiserver-operator-79c7c646fd-5rvr5                 1/1     Running     3          45m
        openshift-apiserver                                apiserver-b944c4645-q694g                                     2/2     Running     0          29m
        openshift-apiserver                                apiserver-b944c4645-shdxb                                     2/2     Running     0          31m
        openshift-apiserver                                apiserver-b944c4645-x7rf2                                     2/2     Running     0          33m
         ...
        ```
    *   Ensure your nodes are in the READY status:
        ```terminal
        $ oc get nodes
        ```
        ```terminal title="Example output"
        NAME                                       STATUS   ROLES    AGE   VERSION
        ci-ln-47ltxtb-f76d1-mrffg-master-0         Ready    master   42m   v1.35.4
        ci-ln-47ltxtb-f76d1-mrffg-master-1         Ready    master   42m   v1.35.4
        ci-ln-47ltxtb-f76d1-mrffg-master-2         Ready    master   42m   v1.35.4
        ci-ln-47ltxtb-f76d1-mrffg-worker-a-gsxbz   Ready    worker   35m   v1.35.4
        ci-ln-47ltxtb-f76d1-mrffg-worker-b-5qqdx   Ready    worker   35m   v1.35.4
        ci-ln-47ltxtb-f76d1-mrffg-worker-c-rjkpq   Ready    worker   34m   v1.35.4
        ```