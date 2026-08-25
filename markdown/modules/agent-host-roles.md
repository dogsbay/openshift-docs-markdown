{%- set _mod_docs_content_type = "CONCEPT" %}
# Host roles {id="agent-host-roles_{{ context }}"}

Each host in the cluster is assigned a role of either `master` or `worker`.
You can define the role for each host in the `agent-config.yaml` file by using the `role` parameter.
If you do not assign a role to the hosts, the roles will be assigned at random during installation. {._abstract}

It is recommended to explicitly define roles for your hosts.

The `rendezvousIP` must be assigned to a host with the `master` role. This can be done manually or by allowing the Agent-based Installer to assign the role.


:::important

You do not need to explicitly define the `master` role for the rendezvous host, however you cannot create configurations that conflict with this assignment.

For example, if you have 4 hosts with 3 of the hosts explicitly defined to have the `master` role, the last host that is automatically assigned the `worker` role during installation cannot be configured as the rendezvous host.

:::


```yaml title="Sample agent-config.yaml file"
apiVersion: v1beta1
kind: AgentConfig
metadata:
  name: example-cluster
rendezvousIP: 192.168.111.80
hosts:
  - hostname: master-1
    role: master
    interfaces:
      - name: eno1
        macAddress: 00:ef:44:21:e6:a5
  - hostname: master-2
    role: master
    interfaces:
      - name: eno1
        macAddress: 00:ef:44:21:e6:a6
  - hostname: master-3
    role: master
    interfaces:
      - name: eno1
        macAddress: 00:ef:44:21:e6:a7
  - hostname: worker-1
    role: worker
    interfaces:
      - name: eno1
        macAddress: 00:ef:44:21:e6:a8
```