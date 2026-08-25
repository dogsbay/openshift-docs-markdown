{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting audit log configuration {id="microshift-troubleshooting-audit-logs_{{ context }}"}

You can use the following steps to troubleshoot {{ microshift_short }} custom audit log settings and file locations. {._abstract}

**Procedure**

*   Check the current values that are configured by running the following command:
    ```terminal
    $ sudo microshift show-config --mode effective
    ```
    ```yaml title="Example output"
    auditLog:
        maxFileSize: 200
        maxFiles: 1
        maxFileAge: 7
        profile: AllRequestBodies
    ```
*   Check the `audit.log` file permissions by running the following command:
    ```terminal
    $ sudo ls -ltrh /var/log/kube-apiserver/audit.log
    ```
    ```terminal title="Example output"
    -rw-------. 1 root root 46M Mar 12 09:52 /var/log/kube-apiserver/audit.log
    ```
*   List the contents of the current log directory by running the following command:
    ```terminal
    $ sudo ls -ltrh /var/log/kube-apiserver/
    ```
    ```terminal title="Example output"
    total 6.0M
    -rw-------. 1 root root 2.0M Mar 12 10:56 audit-2024-03-12T14-56-16.267.log
    -rw-------. 1 root root 2.0M Mar 12 10:56 audit-2024-03-12T14-56-49.444.log
    -rw-------. 1 root root 962K Mar 12 10:57 audit.log
    ```