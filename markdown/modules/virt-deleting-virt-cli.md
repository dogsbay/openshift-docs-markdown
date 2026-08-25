{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling {{ VirtProductName }} by using the CLI {id="virt-deleting-virt-cli_{{ context }}"}

You can uninstall {{ VirtProductName }} by using the OpenShift CLI (`oc`). {._abstract}

**Prerequisites**

*   You have access to the {{ product_title }} cluster using an account with `cluster-admin` permissions.
*   You have installed the {{ oc_first }}.
*   You have deleted all virtual machines and virtual machine instances. You cannot uninstall {{ VirtProductName }} while its workloads remain on the cluster.

**Procedure**

1.  Delete the `HyperConverged` custom resource:
    ```terminal
    $ oc delete HyperConverged kubevirt-hyperconverged -n {{ CNVNamespace }}
    ```
1.  Delete the {{ VirtProductName }} Operator subscription:
    ```terminal
    $ oc delete subscription hco-operatorhub -n {{ CNVNamespace }}
    ```
1.  Delete the {{ VirtProductName }} `ClusterServiceVersion` resource:
    ```terminal
    $ oc delete csv -n openshift-cnv -l operators.coreos.com/kubevirt-hyperconverged.{{ CNVNamespace }}
    ```
1.  Delete the {{ VirtProductName }} namespace:
    ```terminal
    $ oc delete namespace openshift-cnv
    ```
1.  List the {{ VirtProductName }} custom resource definitions (CRDs) by running the `oc delete crd` command with the `dry-run` option:
    ```terminal
    $ oc delete crd --dry-run=client -l operators.coreos.com/kubevirt-hyperconverged.{{ CNVNamespace }}
    ```

    Example output:
    ```
    customresourcedefinition.apiextensions.k8s.io "cdis.cdi.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "hostpathprovisioners.hostpathprovisioner.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "hyperconvergeds.hco.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "kubevirts.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "networkaddonsconfigs.networkaddonsoperator.network.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "ssps.ssp.kubevirt.io" deleted (dry run)
    customresourcedefinition.apiextensions.k8s.io "tektontasks.tektontasks.kubevirt.io" deleted (dry run)
    ```
1.  Delete the CRDs by running the `oc delete crd` command without the `dry-run` option:
    ```terminal
    $ oc delete crd -l operators.coreos.com/kubevirt-hyperconverged.{{ CNVNamespace }}
    ```