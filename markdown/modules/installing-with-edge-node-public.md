{%- set _mod_docs_content_type = "PROCEDURE" %}
# Optional: Assign public IP addresses to edge compute nodes {id="installing-with-edge-node-public_{{ context }}"}

If your workload requires deploying the edge compute nodes in public subnets on {{ zone_type }} infrastructure, you can configure the machine set manifests when installing a cluster. {._abstract}

AWS {{ zone_type }} infrastructure accesses the network traffic in a specified zone, so applications can take advantage of lower latency when serving end users that are closer to that zone.

The default setting that deploys compute nodes in private subnets might not meet your needs, so consider creating edge compute nodes in public subnets when you want to apply more customization to your infrastructure.


:::important

By default, {{ product_title }} deploy the compute nodes in private subnets. For best performance, consider placing compute nodes in subnets that have their Public IP addresses attached to the subnets.

You must create additional security groups, but ensure that you only open the groups' rules over the internet when you really need to.

:::


**Procedure**

1.  Change to the directory that contains the installation program and generate the manifest files. Ensure that the installation manifests get created at the `openshift` and `manifests` directory level.
    ```terminal
    $ ./openshift-install create manifests --dir <installation_directory>
    ```
1.  Edit the machine set manifest that the installation program generates for the {{ zone_type }}, so that the manifest gets deployed in public subnets. Specify `true` for the `spec.template.spec.providerSpec.value.publicIP` parameter.
    ```yaml title="Example machine set manifest configuration for installing a cluster quickly in {{ zone_type }}"
    spec:
      template:
        spec:
          providerSpec:
            value:
              publicIp: true
              subnet:
                filters:
                  - name: tag:Name
                    values:
                      - ${INFRA_ID}-public-${ZONE_NAME}
    ```
    ```yaml title="Example machine set manifest configuration for installing a cluster in an existing VPC that has {{ zone_type }} subnets"
    apiVersion: machine.openshift.io/v1beta1
    kind: MachineSet
    metadata:
      name: <infrastructure_id>-edge-<zone>
      namespace: openshift-machine-api
    spec:
      template:
        spec:
          providerSpec:
            value:
              publicIp: true
    ```