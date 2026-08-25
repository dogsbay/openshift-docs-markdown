{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enable systemd journal service data persistency {id="microshift-greenboot-systemd-journal-data_{{ context }}"}

The default configuration of the `systemd` journal service stores the data in the volatile `/run/log/journal` directory. To view system logs across system starts and restarts, you must enable log persistence and set limits on the maximal journal data size. {._abstract}

**Procedure**

1.  Make the directory by running the following command:
    ```terminal
    $ sudo mkdir -p /etc/systemd/journald.conf.d
    ```
1.  Create the configuration file by running the following command:
    ```terminal
    cat <<EOF | sudo tee /etc/systemd/journald.conf.d/microshift.conf &>/dev/null
    [Journal]
    Storage=persistent
    SystemMaxUse=1G
    RuntimeMaxUse=1G
    EOF
    ```
1.  Edit the configuration file values for your size requirements.