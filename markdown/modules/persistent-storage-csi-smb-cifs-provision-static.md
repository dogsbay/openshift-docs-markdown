{%- set _mod_docs_content_type = "PROCEDURE" %}
# Static provisioning for CIFS/SMB {id="persistent-storage-csi-smb-cifs-provision-static_{{ context }}"}

You can use static provisioning to create a persistent volume (PV) and persistent volume claim (PVC) to consume existing Server Message Block protocol (SMB) shares: {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console.
*   {{ FeatureName }} CSI Driver Operator and driver installed.
*   You have installed the SMB server and know the following information about the server:
    *   Hostname
    *   Share name
    *   Username and password

**Procedure**

1.  Create a Secret for access to the Samba server running the following command with the following example YAML file:
    $ oc create -f &lt;file_name>.yaml
    ```yaml title="Example Secret YAML file"
    apiVersion: v1
    kind: Secret
    metadata:
      name: smbcreds
      namespace: samba-server
    stringData:
      username: <username>
      password: <password>
    ```
    *   `metadata.name`: Specifies the name of the Secret for the Samba server.
    *   `metadata.namespace`: Specifies the namespace for the Secret for the Samba server.
    *   `stringData.username`: Specifies the username for the Secret for the Samba server.
    *   `stringData.password`: Specifies the password for the Secret for the Samba server.
1.  Create a PV by running the following command with the following example YAML file:
    ```terminal
    $ oc create -f <pv_file_name>.yaml
    ```

    Where `<pv_file_name>.yaml` is the name of the PV YAML file.
    ```yaml title="Example PV YAML file"
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      annotations:
        pv.kubernetes.io/provisioned-by: smb.csi.k8s.io
      name: <pv_name>
    spec:
      capacity:
        storage: 100Gi
      accessModes:
        - ReadWriteMany
      persistentVolumeReclaimPolicy: Retain
      storageClassName: ""
      mountOptions:
        - dir_mode=0777
        - file_mode=0777
      csi:
        driver: smb.csi.k8s.io
        volumeHandle: smb-server.default.svc.cluster.local/share##
        volumeAttributes:
          source: //<hostname>/<shares>
        nodeStageSecretRef:
          name: <secret_name_shares>
          namespace: <namespace>
    ```
    *   `metadata.name`: Specifies the name of the PV.
    *   `spec.csi.volumeHandle` format: `{{ smb_server_address }}<mark>{{ sub_dir_name }}</mark>{{ share_name }}`. Ensure that this value is unique for every share in the cluster.
    *   `spec.csi.volumeAttributes.source`: The Samba server must be installed somewhere that is reachable from the cluster with `<hostname>` being the hostname for the Samba server and &lt;shares> the path the server is configured to have among the exported shares.
    *   `spec.csi.nodeStageSecretRef.name`: Specifies the name of the Secret for the shares.
    *   `spec.csi.nodeStageSecretRef.namespace`: Specifies the applicable namespace.
1.  Create a PVC:
    1.  Create a PVC by running the following command with the following example YAML file:
        ```terminal
        $ oc create -f <pv_file_name>.yaml
        ```

        Where `<pv_file_name>.yaml` is the name of the PVC YAML file.
        ```yaml title="Example PVC YAML file"
        kind: PersistentVolumeClaim
        apiVersion: v1
        metadata:
          name: <pvc_name>
        spec:
          accessModes:
            - ReadWriteMany
          resources:
            requests:
              storage: <storage_amount>
          storageClassName: ""
          volumeName: <pv_name>
        ```
        *   `metadata.name`: Specifies the name of the PVC.
        *   `spec.resources.requests.storage`: Specifies the storage request amount.
        *   `spec.volumeName`: Specifies the name of the PV from the first step.
    1.  Ensure that the PVC was created and is in the `Bound` status by running the following command:
        ```terminal
        $ oc describe pvc <pvc_name>
        ```

        Where `<pvc_name>` is the name of the PVC that you created in the preceding step.
        ```terminal title="Example output"
        Name:          pvc-test
        Namespace:     default
        StorageClass:  
        Status:        Bound
        ...
        ```

        PVC is in `Bound` status.
1.  Create a deployment on Linux by running the following command with the following example YAML file:

    :::note

    The following deployment is not mandatory for using the PV and PVC created in the previous steps. It is example of how they can be used.
    
    :::

    ```terminal
    $ oc create -f <deployment_file_name>.yaml
    ```

    Where `<deployment_file_name>.yaml` is the name of the deployment YAML file.
    ```yaml title="Example deployment YAML file"
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      labels:
        app: nginx
      name: <deployment_name>
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
          name: <deployment_name>
        spec:
          nodeSelector:
            "kubernetes.io/os": linux
          containers:
            - name: <deployment_name>
              image: quay.io/centos/centos:stream8
              command:
                - "/bin/bash"
                - "-c"
                - set -euo pipefail; while true; do echo $(date) >> <mount_path>/outfile; sleep 1; done (2)
              volumeMounts:
                - name: <vol_mount_name>
                  mountPath: <mount_path>
                  readOnly: false
          volumes:
            - name: <vol_mount_name>
              persistentVolumeClaim:
                claimName: <pvc_name>
      strategy:
        rollingUpdate:
          maxSurge: 0
          maxUnavailable: 1
        type: RollingUpdate
    ```
    *   `metadata.name` and `spec.template.name`: Specifies the name of the deployment.
    *   `spec.template.spec.containers.command.set` and `spec.template.spec.containers.volumeMounts.mountpath`: Specifies the volume mount path.
    *   `spec.template.spec.containers.volumeMounts.mountpath` and `spec.template.spec.volumes.name`: Specifies the name of the volume mount.
    *   `spec.template.spec.volumes.persistentVolumeClaim.claimName`: Specifies the name of the PVC created in the preceding step.
1.  Check the setup by running the `df -h` command in the container:
    ```terminal
    $ oc exec -it <pod_name> -- df -h
    ```

    Where `<pod_name>` is the name of the pod.
    ```terminal title="Example output"
    Filesystem            Size  Used Avail Use% Mounted on
    ...
    /dev/sda1              97G   21G   77G  22% /etc/hosts
    //20.43.191.64/share   97G   21G   77G  22% /mnt/smb
    ...
    ```

    In this example, there is a `/mnt/smb` directory mounted as a Common Internet File System (CIFS) filesystem.