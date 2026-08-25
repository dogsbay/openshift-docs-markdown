{% if context == "using-image-pull-secrets" %}
{%- set image_pull_secrets = true -%}
{% endif %}

{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the global cluster pull secret {id="images-update-global-pull-secret_{{ context }}"}

To add new registries or update authentication for your {{ product_title }} cluster, you can update the global pull secret by appending new credentials to the _additional-pull-secret_. To do this, you can use the `oc set data secret/additional-pull-secret -n kube-system` command. Hypershift manages the new credential propagation among the HostedCluster nodes. {._abstract}

{% if openshift_rosa_hcp %}
This feature provides a dedicated mechanism to separate your private credentials from the pull secret managed by the service, ensuring cluster functionality while restricting external visibility of your sensitive data. This separation allows you to independently rotate secrets and maintain exclusive ownership for compliance without impacting core managed service operations.

{{ product_title }} already has some immutable entries in the file, and you will not be able to modify those. If you are in this situation, you can follow this approach to use the same registry with different credentials.
This is a sample of authentication that is already in place:

```terminal
"auths":
  "<quay.io: xxxxYYYzzzz>"
```

In the following case you can add a more specific entry:

```terminal
"auths":
  "<quay.io/sampleNamespace": 111445656>"
```
This adds a new layer to the pull secret without affecting the original registry entry.
{% endif %}

{% if not image_pull_secrets %}
Use this procedure when you need a separate registry to store images than the registry used during installation.
{% endif %}

{% if image_pull_secrets %}

:::important

{%- if openshift_enterprise %}
The global pull secret is a HostedControlPlane feature only and is not an OCP standalone feature.
{% endif %}
{% if openshift_rosa_hcp %}
The global pull secret is a HostedControlPlane feature only and is not an OCP standalone feature and is also only available on {{ product_title }} version 4.20.6 and later.
{% endif %}

To transfer your cluster to another owner, you must initiate the transfer in {{ cluster_manager_url }} and then update the pull secret on the cluster. Updating a cluster’s pull secret without initiating the transfer in {{ cluster_manager }} causes the cluster to stop reporting Telemetry metrics in {{ cluster_manager }}.

For more information, see _Transferring cluster ownership_ under _Additional resources_ in the {{ cluster_manager_first }} documentation.

:::

{% endif %}

**Prerequisites**

*   You have access to the cluster as a user with the `cluster-admin` role.

**Procedure**

1.  Optional: To append a new pull secret to the existing pull secret:
    1.  Download the pull secret by entering the following command:
        ```terminal
        $ oc get secret/pull-secret -n openshift-config --template='{{index .data ".dockerconfigjson" | base64decode}}' > <pull_secret_location>
        ```
        where:


        `<pull_secret_location>`
        :   Specifies the path to the pull secret file.
    1.  Add the new pull secret by entering the following command:
        ```terminal
        $ oc registry login --registry="<registry>" \
        --auth-basic="<username>:<password>" \
        --to=<pull_secret_location>
        ```
        where:


        `<registry>`
        :   Specifies the new registry. You can include many repositories within the same registry, for example: `--registry="<registry/my-namespace/my-repository>`.


        `<username>:<password>`
        :   Specifies the credentials of the new registry.


        `<pull_secret_location>`
        :   Specifies the path to the pull secret file.
1.  Update the global pull secret for your cluster by entering the following command. Note that this update rolls out to all nodes, which can take some time depending on the size of your cluster.
    ```terminal
    $ oc set data secret/pull-secret -n openshift-config \
      --from-file=.dockerconfigjson=<pull_secret_location>
    ```
    where:


    `<pull_secret_location>`
    :   Specifies the path to the new pull secret file.

    This merges your additional pull secret with the original HostedCluster pull secret, making it available to all nodes in the cluster.
1.  Optional: Modify the additional pull secret added by entering the following command:
    ```terminal
    $ oc edit secret additional-pull-secret -n kube-system
    ```

    The secret must contain a valid DockerConfigJSON format.
    ```yaml title="Example pull secret"
    apiVersion: v1
    kind: Secret
    metadata:
      name: additional-pull-secret
      namespace: kube-system
    type: kubernetes.io/dockerconfigjson
    data:
      .dockerconfigjson: <base64-encoded-docker-config-json>
    ```

    This results in the following states of the each pull secret:
    *   **Original**: immutable
    *   **Additional**: mutable
    *   **Global**: final state of both the original and additional pull secrets
1.  Optional: Delete the additional pull secret added by entering the following command:
    ```terminal
    $ oc delete secret additional-pull-secret -n kube-system
    ```

    This triggers the automatic cleanup process across your nodes.

{% if context == "using-image-pull-secrets" %}
{%- set image_pull_secrets = false -%}
{% endif %}