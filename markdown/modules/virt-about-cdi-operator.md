{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Containerized Data Importer (CDI) Operator {id="virt-about-cdi-operator_{{ context }}"}

The CDI Operator, `cdi-operator`, manages CDI and its related resources, which imports a virtual machine (VM) image into a persistent volume claim (PVC) by using a data volume. {._abstract}

![cdi-operator components](/images/cnv_components_cdi-operator.png)

**CDI Operator components**

| **Component** | **Description** |
| --- | --- |
| `deployment/cdi-apiserver` | Manages the authorization to upload VM disks into PVCs by issuing secure upload tokens. |
| `deployment/cdi-uploadproxy` | Directs external disk upload traffic to the appropriate upload server pod so that it can be written to the correct PVC. Requires a valid upload token. |
| `pod/cdi-importer` | Helper pod that imports a virtual machine image into a PVC when creating a data volume. |