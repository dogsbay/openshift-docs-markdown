{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding {{ ibm_power_title }} agents to the InfraEnv resource {id="hcp-ibm-power-add-agents_{{ context }}"}

You can add agents by manually configuring the machine to start with the live ISO. {._abstract}

**Procedure**

1.  Download the live ISO and use it to start a bare metal or a virtual machine (VM) host. You can find the URL for the live ISO in the `status.isoDownloadURL` field in the `InfraEnv` resource. At startup, the host communicates with the Assisted Service and registers as an agent in the same namespace as the `InfraEnv` resource.
1.  To list the agents and some of their properties, enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```terminal title="Example output"
    NAME                                   CLUSTER   APPROVED   ROLE          STAGE
    86f7ac75-4fc4-4b36-8130-40fa12602218                        auto-assign
    e57a637f-745b-496e-971d-1abbf03341ba                        auto-assign
    ```
1.  After each agent is created, you can optionally set the `installation_disk_id` and `hostname` for an agent:
    1.  To set the `installation_disk_id` field for an agent, enter the following command:
        ```terminal
        $ oc -n <hosted_control_plane_namespace> patch agent <agent_name> -p '{"spec":{"installation_disk_id":"<installation_disk_id>","approved":true}}' --type merge
        ```
    1.  To set the `hostname` field for an agent, enter the following command:
        ```terminal
        $ oc -n <hosted_control_plane_namespace> patch agent <agent_name> -p '{"spec":{"hostname":"<hostname>","approved":true}}' --type merge
        ```

**Verification**

*   To verify that the agents are approved for use, enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```terminal title="Example output"
    NAME                                   CLUSTER   APPROVED   ROLE          STAGE
    86f7ac75-4fc4-4b36-8130-40fa12602218             true       auto-assign
    e57a637f-745b-496e-971d-1abbf03341ba             true       auto-assign
    ```