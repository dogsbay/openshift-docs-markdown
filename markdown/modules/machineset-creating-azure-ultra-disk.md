{% if context == "creating-machineset-azure" %}
{%- set mapi = true -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = true -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = true -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = true -%}
{% endif %}

{% if mapi %}
{% endif %}
{% if cpmso %}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating machines with ultra disks by using machine sets {id="machineset-creating-azure-ultra-disk_{{ context }}"}

You can deploy machines with ultra disks on {{ azure_first }} by editing your machine set YAML file. {._abstract}

**Prerequisites**

*   Have an existing {{ azure_full }} cluster.

**Procedure**

{% if mapi or cpmso %}
1.  Create a custom secret in the `openshift-machine-api` namespace by using the `{{ machine_role }}` data secret by running the following command:
    ```terminal
    $ oc -n openshift-machine-api \
    get secret <role>-user-data \
    --template='{{index .data.userData | base64decode}}' | jq > userData.txt
    ```

    where:

    `<role>`
    :   Replace with `{{ machine_role }}`.

    `userData.txt`
    :   Specifies `userData.txt` as the name of the new custom secret.
1.  In a text editor, open the `userData.txt` file and locate the final `}` character in the file.
    1.  On the immediately preceding line, add a `,`.
    1.  Create a new line after the `,` and add the following configuration details:
        ```json
        "storage": {
          "disks": [
            {
              "device": "/dev/disk/azure/scsi1/lun0",
              "partitions": [
                {
                  "label": "lun0p1",
                  "sizeMiB": 1024,
                  "startMiB": 0
                }
              ]
            }
          ],
          "filesystems": [
            {
              "device": "/dev/disk/by-partlabel/lun0p1",
              "format": "xfs",
              "path": "/var/lib/lun0p1"
            }
          ]
        },
        "systemd": {
          "units": [
            {
              "contents": "[Unit]\nBefore=local-fs.target\n[Mount]\nWhere=/var/lib/lun0p1\nWhat=/dev/disk/by-partlabel/lun0p1\nOptions=defaults,pquota\n[Install]\nWantedBy=local-fs.target\n",
              "enabled": true,
              "name": "var-lib-lun0p1.mount"
            }
          ]
        }
        ```

        where:

        `"disks"`
        :   Specifies the configuration details for the disk that you want to attach to a node as an ultra disk.

        `"device"`
        :   Specifies the `lun` value that is defined in the `dataDisks` stanza of the machine set you are using. For example, if the machine set contains `lun: 0`, specify `lun0`. You can initialize multiple data disks by specifying multiple `"disks"` entries in this configuration file. If you specify multiple `"disks"` entries, ensure that the `lun` value for each matches the value in the machine set.

        `"partitions"`
        :   Specifies the configuration details for a new partition on the disk.

        `"label"`
        :   Specifies a label for the partition. You might find it helpful to use hierarchical names, such as `lun0p1` for the first partition of `lun0`.

        `"sizeMiB"`
        :   Specifies the total size in MiB of the partition.

        `"filesystems"`
        :   Specifies the filesystem to use when formatting a partition. Use the partition label to specify the partition.

        `"units"`
        :   Specifies a `systemd` unit to mount the partition at boot. Use the partition label to specify the partition. You can create multiple partitions by specifying multiple `"partitions"` entries in this configuration file. If you specify multiple `"partitions"` entries, you must specify a `systemd` unit for each.

        `"contents"`
        :   Specifies the value of `storage.filesystems.path` for `Where`. Specifies the value of `storage.filesystems.device` for `What`.
1.  Extract the disabling template value to a file called `disableTemplating.txt` by running the following command:
    ```terminal
    $ oc -n openshift-machine-api get secret <role>-user-data \
    --template='{{index .data.disableTemplating | base64decode}}' | jq > disableTemplating.txt
    ```

    Replace `<role>` with `{{ machine_role }}`.
1.  Combine the `userData.txt` file and `disableTemplating.txt` file to create a data secret file by running the following command:
    ```terminal
    $ oc -n openshift-machine-api create secret generic <role>-user-data-x5 \
    --from-file=userData=userData.txt \
    --from-file=disableTemplating=disableTemplating.txt
    ```

    For `<role>-user-data-x5`, specify the name of the secret. Replace `<role>` with `{{ machine_role }}`.
{% endif %}

{% if not cpmso %}
1.  Copy an existing {{ azure_short }} `MachineSet` custom resource (CR) and edit it by running the following command:
    ```terminal
    $ oc edit machineset <machine_set_name>
    ```

    where:

    `<machine_set_name>`
    :   Indicates the machine set that you want to provision machines with ultra disks.

1.  Add the following lines in the positions indicated:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    spec:
      template:
        spec:
          metadata:
            labels:
              disk: ultrassd
          providerSpec:
            value:
              ultraSSDCapability: Enabled
{%- if mapi %}
              dataDisks:
              - nameSuffix: ultrassd
                lun: 0
                diskSizeGB: 4
                deletionPolicy: Delete
                cachingType: None
                managedDisk:
                  storageAccountType: UltraSSD_LRS
              userDataSecret:
                name: <role>-user-data-x5
{%- endif %}
    ```

    where:

    `spec.template.spec.metadata.labels.disk`
    :   Specifies a label to use to select a node that is created by this machine set. The example uses `disk.ultrassd` for this value.

    `spec.template.spec.providerSpec.value.ultraSSDCapability`
    :   Enables the use of ultra disks.
{%- if mapi %}
        For `dataDisks`, include the entire stanza.

    `spec.template.spec.providerSpec.value.dataDisks`
    :   Ensure you include the entire stanza for `dataDisks`.

    `spec.template.spec.providerSpec.value.userDataSecret.name`
    :   Specifies the user data secret created earlier. Replace `<role>` with `{{ machine_role }}`.
{%- endif %}
1.  Create a machine set by using the updated configuration by running the following command:
    ```terminal
    $ oc create -f <machine_set_name>.yaml
    ```
{% endif %}

{% if cpmso %}
1.  Edit your control plane machine set CR by running the following command:
    ```terminal
    $ oc --namespace openshift-machine-api edit controlplanemachineset.machine.openshift.io cluster
    ```
1.  Add the following lines in the positions indicated:
    ```yaml
    apiVersion: machine.openshift.io/v1beta1
    kind: ControlPlaneMachineSet
    spec:
      template:
        spec:
          metadata:
            labels:
              disk: ultrassd
          providerSpec:
            value:
              ultraSSDCapability: Enabled
              dataDisks:
              - nameSuffix: ultrassd
                lun: 0
                diskSizeGB: 4
                deletionPolicy: Delete
                cachingType: None
                managedDisk:
                  storageAccountType: UltraSSD_LRS
              userDataSecret:
                name: <role>-user-data-x5
    ```

    where:

    `spec.template.spec.metadata.labels.disk`
    :   Specifies a label to use to select a node that is created by this machine set. The example uses `disk.ultrassd` for this value.

    `spec.template.spec.providerSpec.value.ultraSSDCapability`
    :   Enables the use of ultra disks. For `dataDisks`, include the entire stanza.

    `spec.template.spec.providerSpec.value.userDataSecret.name`
    :   Specifies the user data secret created earlier. Replace `<role>` with `{{ machine_role }}`.
1.  Save your changes.
    *   For clusters that use the default `RollingUpdate` update strategy, the Operator automatically propagates the changes to your control plane configuration.
    *   For clusters that are configured to use the `OnDelete` update strategy, you must replace your control plane machines manually.
{% endif %}

{% if pvc %}
1.  Create a storage class that contains the following YAML definition:
    ```yaml
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: ultra-disk-sc
    parameters:
      cachingMode: None
      diskIopsReadWrite: "2000"
      diskMbpsReadWrite: "320"
      kind: managed
      skuname: UltraSSD_LRS
    provisioner: disk.csi.azure.com
    reclaimPolicy: Delete
    volumeBindingMode: WaitForFirstConsumer
    ```

    where:

    `metadata.name`
    :   Specifies the name of the storage class. The example uses `ultra-disk-sc` for this value.

    `parameters.diskIopsReadWrite`
    :   Specifies the number of Input/Output Operations Per Second (IOPS) for the storage class.

    `parameters.diskMbpsReadWrite`
    :   Specifies the throughput in MBps for the storage class.

    `provisioner`
    :   For {{ azure_full }} Kubernetes Service (AKS) version 1.21 or later, use `disk.csi.azure.com`. For earlier versions of AKS, use `kubernetes.io/azure-disk`.

    `volumeBindingMode`
    :   Optional parameter. Specifies this parameter to wait for the creation of the pod that will use the disk.
1.  Create a persistent volume claim (PVC) to reference the `ultra-disk-sc` storage class that contains the following YAML definition:
    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: ultra-disk
    spec:
      accessModes:
      - ReadWriteOnce
      storageClassName: ultra-disk-sc
      resources:
        requests:
          storage: 4Gi
    ```

    where:

    `metadata.name`
    :   Specifies the name of the PVC. The example uses `ultra-disk` for this value.

    `spec.storageClassName`
    :   Specifies the name of the storage class to use. The example  uses `ultra-disk-sc` storage class.

    `spec.resources.requests.storage`
    :   Specifies the size for the storage class. The minimum value is `4Gi`.
1.  Create a pod that contains the following YAML definition:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx-ultra
    spec:
      nodeSelector:
        disk: ultrassd
      containers:
      - name: nginx-ultra
        image: alpine:latest
        command:
          - "sleep"
          - "infinity"
        volumeMounts:
        - mountPath: "/mnt/azure"
          name: volume
      volumes:
        - name: volume
          persistentVolumeClaim:
            claimName: ultra-disk
    ```

    where:

    `spec.nodeSelector.disk`
    :   Specifies the label of the machine set that enables the use of ultra disks. The example uses `disk.ultrassd` for this value.

    `spec.volumes.persistentVolumeClaim.claimName`
    :   Specifies the name of the PVC to attach. This pod references the `ultra-disk` PVC.
{% endif %}

**Verification**

1.  Validate that the machines are created by running the following command:
    ```terminal
    $ oc get machines
    ```

    The machines should be in the `Running` state.
1.  For a machine that is running and has a node attached, validate the partition by running the following command:
    ```terminal
    $ oc debug node/<node_name> -- chroot /host lsblk
    ```

    In this command, `oc debug node/<node_name>` starts a debugging shell on the node `<node_name>` and passes a command with `--`. The passed command `chroot /host` provides access to the underlying host OS binaries, and `lsblk` shows the block devices that are attached to the host OS machine.

**Next steps**

{% if not cpmso %}
*   To use an ultra disk from within a pod, create a workload that uses the mount point. Create a YAML file similar to the following example:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: ssd-benchmark1
    spec:
      containers:
      - name: ssd-benchmark1
        image: nginx
        ports:
          - containerPort: 80
            name: "http-server"
        volumeMounts:
        - name: lun0p1
          mountPath: "/tmp"
      volumes:
        - name: lun0p1
          hostPath:
            path: /var/lib/lun0p1
            type: DirectoryOrCreate
      nodeSelector:
        disktype: ultrassd
    ```
{% endif %}

{% if cpmso %}
*   To use an ultra disk on the control plane, reconfigure your workload to use the control plane’s ultra disk mount point.
{% endif %}

{% if context == "creating-machineset-azure" %}
{%- set mapi = false -%}
{% endif %}
{% if context == "cpmso-supported-features-azure" %}
{%- set cpmso = false -%}
{% endif %}
{% if context == "persistent-storage-azure" %}
{%- set pvc = false -%}
{% endif %}
{% if context == "persistent-storage-csi-azure" %}
{%- set pvc = false -%}
{% endif %}