{%- set _mod_docs_content_type = "PROCEDURE" %}
# Reinitializing the database {id="file-integrity-operator-reinitializing-database_{{ context }}"}

If the File Integrity Operator detects a change that was planned, it might be required to reinitialize the database. {._abstract}

**Procedure**

*   Annotate the `FileIntegrity` custom resource (CR) with `file-integrity.openshift.io/re-init`:
    ```terminal
    $ oc annotate fileintegrities/worker-fileintegrity file-integrity.openshift.io/re-init=
    ```

    The old database and log files are backed up and a new database is initialized. The old database and logs are retained on the nodes under `/etc/kubernetes`, as seen in the following output from a pod spawned using `oc debug`:
    ```terminal title="Example output"
     ls -lR /host/etc/kubernetes/aide.*
    -rw-------. 1 root root 1839782 Sep 17 15:08 /host/etc/kubernetes/aide.db.gz
    -rw-------. 1 root root 1839783 Sep 17 14:30 /host/etc/kubernetes/aide.db.gz.backup-20200917T15_07_38
    -rw-------. 1 root root   73728 Sep 17 15:07 /host/etc/kubernetes/aide.db.gz.backup-20200917T15_07_55
    -rw-r--r--. 1 root root       0 Sep 17 15:08 /host/etc/kubernetes/aide.log
    -rw-------. 1 root root     613 Sep 17 15:07 /host/etc/kubernetes/aide.log.backup-20200917T15_07_38
    -rw-r--r--. 1 root root       0 Sep 17 15:07 /host/etc/kubernetes/aide.log.backup-20200917T15_07_55
    ```

    To provide some permanence of record, the resulting config maps are not owned by the `FileIntegrity` object, so manual cleanup is necessary. As a result, any previous integrity failures would still be visible in the `FileIntegrityNodeStatus` object.