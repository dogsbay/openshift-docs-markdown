{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an InfraEnv resource for {{ hcp }} on {{ ibm_power_title }} {id="hcp-ibm-power-infraenv_{{ context }}"}

An `InfraEnv` resource is an environment where hosts that are starting the live ISO can join as agents. In this case, the agents are created in the same namespace as your hosted control plane. {._abstract}

You can create an `InfraEnv` resource for {{ hcp }} on 64-bit x86 bare metal for {{ ibm_power_title }} compute nodes.

**Procedure**

1.  Create a YAML file to configure an `InfraEnv` resource. See the following example:
    ```yaml
    apiVersion: agent-install.openshift.io/v1beta1
    kind: InfraEnv
    metadata:
      name: <hosted_cluster_name>
      namespace: <hosted_control_plane_namespace>
    spec:
      cpuArchitecture: ppc64le
      pullSecretRef:
        name: pull-secret
      sshAuthorizedKey: <path_to_ssh_public_key>
    ```
    *   `metadata.name` specifies the name of your hosted cluster.
    *   `metadata.namespace` specifies the name of the hosted control plane namespace, for example, `clusters-hosted`.
    *   `spec.sshAuthorizedKey` specifies the path to your SSH public key. The default file path is `~/.ssh/id_rsa.pub`.
1.  Save the file as `infraenv-config.yaml`.
1.  Apply the configuration by entering the following command:
    ```terminal
    $ oc apply -f infraenv-config.yaml
    ```
1.  To fetch the URL to download the live ISO, which allows {{ ibm_power_title }} machines to join as agents, enter the following command:
    ```terminal
    $ oc -n <hosted_control_plane_namespace> get InfraEnv <hosted_cluster_name> \
      -o json
    ```