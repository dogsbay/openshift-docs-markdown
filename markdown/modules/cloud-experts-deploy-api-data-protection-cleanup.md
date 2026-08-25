{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up AWS resources {id="cloud-experts-deploy-api-data-protection-cleanup_{{ context }}"}

Clean up your AWS resources after completing this lab tutorial. {._abstract}

**Procedure**

1.  Delete the workload:
    ```terminal
    $ oc delete ns hello-world
    ```
1.  Remove the backup and restore resources from the cluster if they are no longer required:
    ```terminal
    $ oc delete backups.velero.io hello-world
    $ oc delete restores.velero.io hello-world
    ```
1.  Delete the backup, restore, and remote objects in S3:
    ```terminal
    $ velero backup delete hello-world
    $ velero restore delete hello-world
    ```
1.  Delete the Data Protection Application:
    ```terminal
    $ oc -n openshift-adp delete dpa ${CLUSTER_NAME}-dpa
    ```
1.  Delete the Cloud Storage:
    ```terminal
    $ oc -n openshift-adp delete cloudstorage ${CLUSTER_NAME}-oadp
    ```

    :::warning

    If this command hangs, you might need to delete the finalizer:
    ```terminal
    $ oc -n openshift-adp patch cloudstorage ${CLUSTER_NAME}-oadp -p '{"metadata":{"finalizers":null}}' --type=merge
    ```
    
    :::

1.  Remove the Operator if it is no longer required:
    ```terminal
    $ oc -n openshift-adp delete subscription oadp-operator
    ```
1.  Remove the namespace for the Operator:
    ```terminal
    $ oc delete ns redhat-openshift-adp
    ```
1.  Remove the Custom Resource Definitions from the cluster if you no longer wish to have them:
    ```terminal
    $ for CRD in `oc get crds | grep velero | awk '{print $1}'`; do oc delete crd $CRD; done
    $ for CRD in `oc get crds | grep -i oadp | awk '{print $1}'`; do oc delete crd $CRD; done
    ```
1.  Delete the AWS S3 Bucket:
    ```terminal
    $ aws s3 rm s3://${CLUSTER_NAME}-oadp --recursive
    $ aws s3api delete-bucket --bucket ${CLUSTER_NAME}-oadp
    ```
1.  Detach the policy from the role:
    ```terminal
    $ aws iam detach-role-policy --role-name "${ROLE_NAME}" \
     --policy-arn "${POLICY_ARN}"
    ```
1.  Delete the role:
    ```terminal
    $ aws iam delete-role --role-name "${ROLE_NAME}"
    ```