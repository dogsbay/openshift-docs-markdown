{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying hosted cluster creation {id="hcp-bm-verify_{{ context }}"}

After the deployment process is complete, you can verify that the hosted cluster was created successfully. {._abstract}

After you create the hosted cluster, wait a few minutes before you start the steps in the procedure.

**Procedure**

1.  Obtain the kubeconfig for your new hosted cluster by entering the extract command:
    ```terminal
    $ oc extract -n <hosted-control-plane-namespace> secret/admin-kubeconfig \
      --to=- > kubeconfig-<hosted-cluster-name>
    ```
1.  Use the kubeconfig to view the cluster Operators of the hosted cluster. Enter the following command:
    ```terminal
    $ oc get co --kubeconfig=kubeconfig-<hosted-cluster-name>
    ```
    ```text title="Example output"
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    console                                    4.10.26   True        False         False      2m38s
    dns                                        4.10.26   True        False         False      2m52s
    image-registry                             4.10.26   True        False         False      2m8s
    ingress                                    4.10.26   True        False         False      22m
    ```
1.  You can also view the running pods on your hosted cluster by entering the following command:
    ```terminal
    $ oc get pods -A --kubeconfig=kubeconfig-<hosted-cluster-name>
    ```
    ```text title="Example output"
    NAMESPACE                                          NAME                                                      READY   STATUS             RESTARTS        AGE
    kube-system                                        konnectivity-agent-khlqv                                  0/1     Running            0               3m52s
    openshift-cluster-node-tuning-operator             tuned-dhw5p                                               1/1     Running            0               109s
    openshift-cluster-storage-operator                 cluster-storage-operator-5f784969f5-vwzgz                 1/1     Running            1 (113s ago)    20m
    openshift-cluster-storage-operator                 csi-snapshot-controller-6b7687b7d9-7nrfw                  1/1     Running            0               3m8s
    openshift-console                                  console-5cbf6c7969-6gk6z                                  1/1     Running            0               119s
    openshift-console                                  downloads-7bcd756565-6wj5j                                1/1     Running            0               4m3s
    openshift-dns-operator                             dns-operator-77d755cd8c-xjfbn                             2/2     Running            0               21m
    openshift-dns                                      dns-default-kfqnh                                         2/2     Running            0               113s
    ```