{%- set _mod_docs_content_type = "PROCEDURE" %}
# Restoring etcd on a hosted cluster {id="hosted-cluster-etcd-restore-on-premise_{{ context }}"}

Fix failures by restoring a snapshot of etcd on a hosted cluster. {._abstract}

**Prerequisites**

*   You completed the steps in "Backing up etcd on a hosted cluster". Ensure that you meet the prerequisites listed in that procedure.


:::important

After you back up the hosted cluster, you must back up workloads in the data cluster and then delete the original hosted cluster so that the restore process can begin.

:::


**Procedure**

1.  If you are working in a new terminal session from the session you used to complete the steps in "Backing up etcd on a hosted cluster", set the environment variables again as described in the backup procedure.
1.  Scale down the etcd statefulset by entering the following command:
    ```terminal
    $ oc scale -n ${CONTROL_PLANE_NAMESPACE} statefulset/etcd --replicas=0
    ```
1.  Delete volumes for second and third members by entering the following command:
    ```terminal
    $ oc delete -n ${CONTROL_PLANE_NAMESPACE} pvc/data-etcd-1 pvc/data-etcd-2
    ```
1.  Create a pod to access the first etcd member’s data:
    1.  Get the etcd image by entering the following command:
        ```terminal
        $ ETCD_IMAGE=$(oc get -n ${CONTROL_PLANE_NAMESPACE} statefulset/etcd \
          -o jsonpath='{ .spec.template.spec.containers[0].image }')
        ```
    1.  Create a pod that allows access to etcd data:
        ```yaml {minja}
        $ cat << EOF | oc apply -n ${{ CONTROL_PLANE_NAMESPACE }} -f -
        apiVersion: apps/v1
        kind: Deployment
        metadata:
          name: etcd-data
        spec:
          replicas: 1
          selector:
            matchLabels:
              app: etcd-data
          template:
            metadata:
              labels:
                app: etcd-data
            spec:
              containers:
              - name: access
                image: $ETCD_IMAGE
                volumeMounts:
                - name: data
                  mountPath: /var/lib
                command:
                - /usr/bin/bash
                args:
                - -c
                - |-
                  while true; do
                    sleep 1000
                  done
              volumes:
              - name: data
                persistentVolumeClaim:
                  claimName: data-etcd-0
            EOF
        ```
    1.  Check the status of the `etcd-data` pod and wait for it to be running by entering the following command:
        ```terminal
        $ oc get -n ${CONTROL_PLANE_NAMESPACE} pods -l app=etcd-data
        ```
    1.  Get the name of the `etcd-data` pod by entering the following command:
        ```terminal
        $ DATA_POD=$(oc get -n ${CONTROL_PLANE_NAMESPACE} pods --no-headers \
          -l app=etcd-data -o name | cut -d/ -f2)
        ```
1.  Copy an etcd snapshot into the pod by entering the following command:
    ```terminal
    $ oc cp /tmp/etcd.snapshot.db \
      ${CONTROL_PLANE_NAMESPACE}/${DATA_POD}:/var/lib/restored.snap.db
    ```
1.  Remove old data from the `etcd-data` pod by entering the following commands:
    ```terminal
    $ oc exec -n ${CONTROL_PLANE_NAMESPACE} ${DATA_POD} -- rm -rf /var/lib/data
    ```
    ```terminal
    $ oc exec -n ${CONTROL_PLANE_NAMESPACE} ${DATA_POD} -- mkdir -p /var/lib/data
    ```
1.  Restore the etcd snapshot by entering the following command:
    ```terminal
    $ oc exec -n ${CONTROL_PLANE_NAMESPACE} ${DATA_POD} -- \
         etcdutl snapshot restore /var/lib/restored.snap.db \
         --data-dir=/var/lib/data --skip-hash-check \
         --name etcd-0 \
         --initial-cluster-token=etcd-cluster \
         --initial-cluster etcd-0=https://etcd-0.etcd-discovery.${CONTROL_PLANE_NAMESPACE}.svc:2380,etcd-1=https://etcd-1.etcd-discovery.${CONTROL_PLANE_NAMESPACE}.svc:2380,etcd-2=https://etcd-2.etcd-discovery.${CONTROL_PLANE_NAMESPACE}.svc:2380 \
         --initial-advertise-peer-urls https://etcd-0.etcd-discovery.${CONTROL_PLANE_NAMESPACE}.svc:2380
    ```
1.  Remove the temporary etcd snapshot from the pod by entering the following command:
    ```terminal
    $ oc exec -n ${CONTROL_PLANE_NAMESPACE} ${DATA_POD} -- \
      rm /var/lib/restored.snap.db
    ```
1.  Delete data access deployment by entering the following command:
    ```terminal
    $ oc delete -n ${CONTROL_PLANE_NAMESPACE} deployment/etcd-data
    ```
1.  Scale up the etcd cluster by entering the following command:
    ```terminal
    $ oc scale -n ${CONTROL_PLANE_NAMESPACE} statefulset/etcd --replicas=3
    ```
1.  Wait for the etcd member pods to return and report as available by entering the following command:
    ```terminal
    $ oc get -n ${CONTROL_PLANE_NAMESPACE} pods -l app=etcd -w
    ```
1.  Restore reconciliation of the hosted cluster by entering the following command:
    ```terminal
    $ oc patch -n ${HOSTED_CLUSTER_NAMESPACE} hostedclusters/${CLUSTER_NAME} \
      -p '{"spec":{"pausedUntil":"null"}}' --type=merge
    ```

    This command uses the `"null"` string. When you use that string, the controller treats unrecognized strings as not paused, but it logs an error. Instead of `"null"`, you can also use `"false"`, which is valid per Common Expression Language (CEL) validation, or JSON `null`, which removes the field.
1.  Manually roll out the hosted cluster by entering the following command:
    ```terminal
    $ oc annotate hostedcluster -n \
      <hosted_cluster_namespace> <hosted_cluster_name> \
      hypershift.openshift.io/restart-date=$(date --iso-8601=seconds)
    ```

    The Multus admission controller and network node identity pods do not start yet.
1.  Delete the pods for the second and third members of etcd and their PVCs by entering the following commands:
    ```terminal
    $ oc delete -n ${CONTROL_PLANE_NAMESPACE} pvc/data-etcd-1 pod/etcd-1 --wait=false
    ```
    ```terminal
    $ oc delete -n ${CONTROL_PLANE_NAMESPACE} pvc/data-etcd-2 pod/etcd-2 --wait=false
    ```
1.  Manually roll out the hosted cluster again by entering the following command:
    ```terminal
    $ oc annotate hostedcluster -n \
      <hosted_cluster_namespace> <hosted_cluster_name> \
      hypershift.openshift.io/restart-date=$(date --iso-8601=seconds) \
      --overwrite
    ```

    After a few minutes, the control plane pods start running.
1.  If your hosted cluster is on {{ aws_short }} and you need to apply OIDC fixes after the restore process, enter the following command:
    ```terminal
    $ hcp fix dr-oidc-iam --hc-name <hosted_cluster_name> --hc-namespace <hosted_cluster_namespace> --aws-creds ~/.aws/credentials
    ```

    This command regenerates the OIDC in S3 in case OIDC is deleted.