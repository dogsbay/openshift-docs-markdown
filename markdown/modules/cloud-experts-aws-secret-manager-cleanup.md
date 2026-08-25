{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up AWS resources {id="cloud-experts-aws-secret-manager-cleanup_{{ context }}"}

Clean up your AWS resources after completing this lab tutorial. {._abstract}

**Procedure**

1.  Delete the application by running the following command:
    ```terminal
    $ oc delete project my-application
    ```
1.  Delete the secrets store Container Storage Interface (CSI) driver by running the following command:
    ```terminal
    $ helm delete -n csi-secrets-store csi-secrets-store-driver
    ```
1.  Delete the security context constraints by running the following command:
    ```terminal
    $ oc adm policy remove-scc-from-user privileged \
        system:serviceaccount:csi-secrets-store:secrets-store-csi-driver; oc adm policy remove-scc-from-user privileged \
        system:serviceaccount:csi-secrets-store:csi-secrets-store-provider-aws
    ```
1.  Delete the AWS provider by running the following command:
    ```terminal
    $ oc -n csi-secrets-store delete -f \
    https://raw.githubusercontent.com/rh-mobb/documentation/main/content/misc/secrets-store-csi/aws-provider-installer.yaml
    ```
1.  Delete AWS roles and policies by running the following command:
    ```terminal
    $ aws iam detach-role-policy --role-name openshift-access-to-mysecret \
        --policy-arn $POLICY_ARN; aws iam delete-role --role-name openshift-access-to-mysecret; aws iam delete-policy --policy-arn $POLICY_ARN
    ```
1.  Delete the Secrets Manager secret by running the following command:
    ```terminal
    $ aws secretsmanager --region $REGION delete-secret --secret-id $SECRET_ARN
    ```