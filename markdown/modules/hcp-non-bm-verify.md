{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying hosted cluster creation on non-bare-metal agent machines {id="hcp-non-bm-verify_{{ context }}"}

After the deployment process is complete, you can verify that the hosted cluster was created successfully.  {._abstract}

Follow these steps a few minutes after you create the hosted cluster.

**Procedure**

1.  Obtain the `kubeconfig` file for your new hosted cluster by entering the following command:
    ```terminal
    $ oc extract -n <hosted_cluster_namespace> \
      secret/<hosted_cluster_name>-admin-kubeconfig --to=- \
      > kubeconfig-<hosted_cluster_name>
    ```
1.  Use the `kubeconfig` file to view the cluster Operators of the hosted cluster. Enter the following command:
    ```terminal
    $ oc get co --kubeconfig=kubeconfig-<hosted_cluster_name>
    ```
    ```terminal title="Example output"
    NAME                                       VERSION   AVAILABLE   PROGRESSING   DEGRADED   SINCE   MESSAGE
    console                                    4.10.26   True        False         False      2m38s
    csi-snapshot-controller                    4.10.26   True        False         False      4m3s
    dns                                        4.10.26   True        False         False      2m52s
    ```
1.  View the running pods on your hosted cluster by entering the following command:
    ```terminal
    $ oc get pods -A --kubeconfig=kubeconfig-<hosted_cluster_name>
    ```
    ```terminal title="Example output"
    NAMESPACE                                          NAME                                                      READY   STATUS             RESTARTS        AGE
    kube-system                                        konnectivity-agent-khlqv                                  0/1     Running            0               3m52s
    openshift-cluster-samples-operator                 cluster-samples-operator-6b5bcb9dff-kpnbc                 2/2     Running            0               20m
    openshift-monitoring                               alertmanager-main-0                                       6/6     Running            0               100s
    openshift-monitoring                               openshift-state-metrics-677b9fb74f-qqp6g                  3/3     Running            0               104s
    ```