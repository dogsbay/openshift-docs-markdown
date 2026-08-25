{%- set _mod_docs_content_type = "PROCEDURE" %}
# Encrypting container persistent volumes on AWS with a KMS key {id="aws-container-persistent-volumes-encrypt_{{ context }}"}

You can define a KMS key to encrypt container-persistent volumes on AWS if you have explicit compliance and security guidelines when deploying to AWS. {._abstract}

**Prerequisites**

*   Underlying infrastructure must contain storage.
*   You must create a customer KMS key on AWS.

**Procedure**

1.  Create a storage class:
    ```yaml
    $ cat << EOF | oc create -f -
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: <storage-class-name>
    parameters:
      fsType: ext4
      encrypted: "true"
      kmsKeyId: keyvalue
    provisioner: ebs.csi.aws.com
    reclaimPolicy: Delete
    volumeBindingMode: WaitForFirstConsumer
    EOF
    ```

    where:

    `metadata.name`
    :   Specifies the name of the storage class.

    `parameters.fsType`
    :   Specifies the file system that is created on provisioned volumes.

    `parameters.kmsKeyId`
    :   Specifies the full Amazon Resource Name (ARN) of the key to use when encrypting the container-persistent volume. If you do not provide any key, but the `encrypted` field is set to `true`, then the default KMS key is used.

1.  Create a persistent volume claim (PVC) with the storage class specifying the KMS key:
    ```yaml
    $ cat << EOF | oc create -f -
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: mypvc
    spec:
      accessModes:
        - ReadWriteOnce
      volumeMode: Filesystem
      storageClassName: <storage-class-name>
      resources:
        requests:
          storage: 1Gi
    EOF
    ```
1.  Create workload containers to consume the PVC:
    ```yaml
    $ cat << EOF | oc create -f -
    kind: Pod
    metadata:
      name: mypod
    spec:
      containers:
        - name: httpd
          image: quay.io/centos7/httpd-24-centos7
          ports:
            - containerPort: 80
          volumeMounts:
            - mountPath: /mnt/storage
              name: data
      volumes:
        - name: data
          persistentVolumeClaim:
            claimName: mypvc
    EOF
    ```