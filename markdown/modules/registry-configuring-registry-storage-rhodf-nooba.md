{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring the Image Registry Operator to use Noobaa storage with Red Hat OpenShift Data Foundation {id="registry-configuring-registry-storage-rhodf-nooba_{{ context }}"}

{{ rh_storage_first }} integrates multiple storage types that you can use with the {{ product_registry }}: {._abstract}

*   Ceph, a shared and distributed file system and on-premise object storage
*   NooBaa, providing a Multicloud Object Gateway

Use the following the procedure to configure the image registry to use Noobaa storage.

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.
*   You have access to the {{ product_title }} web console.
*   You installed the `oc` CLI.
*   You installed the [{{ rh_storage }} Operator](https://access.redhat.com/documentation/en-us/red_hat_openshift_data_foundation/latest) to provide object storage and Noobaa object storage.

**Procedure**

1.  Create the object bucket claim using the `openshift-storage.noobaa.io` storage class. For example:
    ```terminal
    cat <<EOF | oc apply -f -
    apiVersion: objectbucket.io/v1alpha1
    kind: ObjectBucketClaim
    metadata:
      name: noobaatest
      namespace: openshift-storage
    spec:
      storageClassName: openshift-storage.noobaa.io
      generateBucketName: noobaatest
    EOF
    ```

    Alternatively, you can use the `openshift-image-registry` for the `namespace` value.
1.  Get the bucket name by entering the following command:
    ```terminal
    $ bucket_name=$(oc get obc -n openshift-storage noobaatest -o jsonpath='{.spec.bucketName}')
    ```
1.  Get the AWS credentials by entering the following commands:
    ```terminal
    $ AWS_ACCESS_KEY_ID=$(oc get secret -n openshift-storage noobaatest -o yaml | grep -w "AWS_ACCESS_KEY_ID:" | head -n1 | awk '{print $2}' | base64 --decode)
    ```
    ```terminal
    $ AWS_SECRET_ACCESS_KEY=$(oc get secret -n openshift-storage noobaatest -o yaml | grep -w "AWS_SECRET_ACCESS_KEY:" | head -n1 | awk '{print $2}' | base64 --decode)
    ```
1.  Create the secret `image-registry-private-configuration-user` with the AWS credentials for the new bucket under `openshift-image-registry project` by entering the following command:
    ```terminal
    $ oc create secret generic image-registry-private-configuration-user --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=${AWS_ACCESS_KEY_ID} --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=${AWS_SECRET_ACCESS_KEY} --namespace openshift-image-registry
    ```
1.  Get the route host by entering the following command:
    ```terminal
    $ route_host=$(oc get route s3 -n openshift-storage -o=jsonpath='{.spec.host}')
    ```
1.  Create a config map that uses an ingress certificate by entering the following commands:
    ```terminal
    $ oc extract secret/$(oc get ingresscontroller -n openshift-ingress-operator default -o json | jq '.spec.defaultCertificate.name // "router-certs-default"' -r) -n openshift-ingress --confirm
    ```
    ```terminal
    $ oc create configmap image-registry-s3-bundle --from-file=ca-bundle.crt=./tls.crt  -n openshift-config
    ```
1.  Configure the image registry to use the Nooba object storage by entering the following command:
    ```terminal
    $ oc patch config.image/cluster -p '{"spec":{"managementState":"Managed","replicas":2,"storage":{"managementState":"Unmanaged","s3":{"bucket":'\"${bucket_name}\"',"region":"us-east-1","regionEndpoint":'\"https://${route_host}\"',"virtualHostedStyle":false,"encrypt":false,"trustedCA":{"name":"image-registry-s3-bundle"}}}}}' --type=merge
    ```