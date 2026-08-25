{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring audit log values {id="microshift-configuring-audit-log-values_{{ context }}"}

To manage disk space, you can customize the audit log retention settings in the {{ microshift_short }} configuration file. Adjusting values such as file age and size ensures that the system retains critical event data without exhausting local storage. {._abstract}

**Procedure**

1.  Make a copy of the provided `config.yaml.default` file in the `/etc/microshift/` directory, renaming it `config.yaml`. Keep the new {{ microshift_short }} `config.yaml` you create in the `/etc/microshift/` directory. The new `config.yaml` is read whenever the {{ microshift_short }} service starts. After you create it, the `config.yaml` file takes precedence over built-in settings.
1.  Replace the default values in the `auditLog` section of the YAML with your desired valid values.
    ```yaml title="Example default auditLog configuration"
    apiServer:
    # ....
      auditLog:
        maxFileAge: 7
        maxFileSize: 200
        maxFiles: 1
        profile: Default
    # ....
    ```

    where:

    `apiServer.auditLog.maxFileAge`
    :   Specifies the maximum time in days that log files are kept. Files older than this limit are deleted. In this example, after a log file is more than 7 days old, it is deleted. The files are deleted regardless of whether or not the live log has reached the maximum file size specified in the `maxFileSize` field. File age is determined by the timestamp written in the name of the rotated log file, for example, `audit-2024-05-16T17-03-59.994.log`. When the value is `0`, the limit is disabled.

    `apiServer.auditLog.maxFileSize`
    :   The maximum audit log file size in megabytes. In this example, the file is rotated as soon as the live log reaches the 200 MB limit. When the value is set to `0`, the limit is disabled.

    `apiServer.auditLog.maxFiles`
    :   The maximum number of rotated audit log files retained. After the limit is reached, the log files are deleted in order from oldest to newest. In this example, the value `1` results in only 1 file of size `maxFileSize` being retained in addition to the current active log. When the value is set to `0`, the limit is disabled.

    `apiServer.auditLog.profile`
    :   Logs only metadata for read and write requests; does not log request bodies except for OAuth access token requests. If you do not specify this field, the `Default` profile is used.

1.  Optional: To specify a new directory for logs, you can stop {{ microshift_short }}, and then move the `/var/log/kube-apiserver` directory to your desired location:
    1.  Stop {{ microshift_short }} by running the following command:
        ```terminal
        $ sudo systemctl stop microshift
        ```
    1.  Move the `/var/log/kube-apiserver` directory to your desired location by running the following command:
        ```terminal
        $ sudo mv /var/log/kube-apiserver __<~/kube-apiserver>__
        ```

        Replace `_<~/kube-apiserver>_` with the path to the directory that you want to use.
    1.  If you specified a new directory for logs, create a symlink to your custom directory at `/var/log/kube-apiserver` by running the following command:
        ```terminal
        $ sudo ln -s __<~/kube-apiserver>__ /var/log/kube-apiserver
        ```

        Replace `_<~/kube-apiserver>_` with the path to the directory that you want to use. This enables the collection of logs in sos reports.
1.  If you are configuring audit log policies on a running instance, restart {{ microshift_short }} by entering the following command:
    ```terminal
    $ sudo systemctl restart microshift
    ```