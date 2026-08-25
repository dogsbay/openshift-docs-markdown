{%- set _mod_docs_content_type = "PROCEDURE" %}
# Backing up pod volumes by using the opt-in method {id="oadp-backing-up-opt-in_{{ context }}"}

Use the opt-in method to specify the exact pod volumes you want to back up using File System Backup (FSB). By applying specific annotations, you can selectively include only the volumes you need, which helps you to manage storage and backup efficiency. {._abstract}

**Procedure**

*   On each pod that contains one or more volumes that you want to back up, enter the following command:
    ```terminal
    $ oc -n <your_pod_namespace> annotate pod/<your_pod_name> \
      backup.velero.io/backup-volumes=<your_volume_name_1>, \ <your_volume_name_2>>,...,<your_volume_name_n>
    ```

    where:

    `<your_volume_name_x>`
    :   specifies the name of the xth volume in the pod specification.