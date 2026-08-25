{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding agents to the heterogeneous cluster {id="hcp-adding-agents_{{ context }}"}

You add agents by manually configuring the machine to boot with a live ISO. You can download the live ISO and use it to boot a bare-metal node or a virtual machine.  {._abstract}

On boot, the node communicates with the `assisted-service` and registers as an agent in the same namespace as the `InfraEnv` resource. After the creation of each agent, you can optionally set its `installation_disk_id` and `hostname` parameters in the specifications. You can then approve the agent to indicate the agent as ready for use.

**Procedure**

1.  Obtain a list of agents by running the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```text title="Example output"
    NAME                                   CLUSTER   APPROVED   ROLE          STAGE
    86f7ac75-4fc4-4b36-8130-40fa12602218                        auto-assign
    e57a637f-745b-496e-971d-1abbf03341ba                        auto-assign
    ```
1.  Patch an agent by running the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> patch agent 86f7ac75-4fc4-4b36-8130-40fa12602218 -p '{"spec":{"installation_disk_id":"/dev/sda","approved":true,"hostname":"worker-0.example.krnl.es"}}' --type merge
    ```
1.  Patch the second agent by running the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> patch agent 23d0c614-2caa-43f5-b7d3-0b3564688baa -p '{"spec":{"installation_disk_id":"/dev/sda","approved":true,"hostname":"worker-1.example.krnl.es"}}' --type merge
    ```
1.  Check the agent approval status by running the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get agents
    ```
    ```text title="Example output"
    NAME                                   CLUSTER   APPROVED   ROLE          STAGE
    86f7ac75-4fc4-4b36-8130-40fa12602218             true       auto-assign
    e57a637f-745b-496e-971d-1abbf03341ba             true       auto-assign
    ```