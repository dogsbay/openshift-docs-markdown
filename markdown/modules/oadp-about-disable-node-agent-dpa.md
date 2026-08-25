{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling the node agent in DataProtectionApplication {id="oadp-about-disable-node-agent-dpa_{{ context }}"}

If you are not using `Restic`, `Kopia`, or `DataMover` for your backups, you can disable the `nodeAgent` field in the `DataProtectionApplication` custom resource (CR). Before you disable `nodeAgent`, ensure the {{ oadp_short }} Operator is idle and not running any backups. {._abstract}

**Procedure**

1.  To disable the `nodeAgent`, set the `enable` flag to `false`. See the following example:
    ```yaml title="Example DataProtectionApplication CR"
    # ...
    configuration:
      nodeAgent:
        enable: false
        uploaderType: kopia
    # ...
    ```

    where:

    `enable`
    :   Enables the node agent.

1.  To enable the `nodeAgent`, set the `enable` flag to `true`. See the following example:
    ```yaml title="Example DataProtectionApplication CR"
    # ...
    configuration:
      nodeAgent:
        enable: true
        uploaderType: kopia
    # ...
    ```

    where:

    `enable`
    :   Enables the node agent.
    You can set up a job to enable and disable the `nodeAgent` field in the `DataProtectionApplication` CR. For more information, see "Running tasks in pods using jobs".