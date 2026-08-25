{%- set _mod_docs_content_type = "CONCEPT" %}
# About the Hostpath Provisioner (HPP) Operator {id="virt-about-hpp-operator_{{ context }}"}

The HPP Operator, `hostpath-provisioner-operator`, deploys and manages the multi-node HPP and related resources. {._abstract}

![hpp-operator components](/_assets/images/cnv_components_hpp-operator.png)

**HPP Operator components**

| **Component** | **Description** |
| --- | --- |
| `deployment/hpp-pool-hpp-csi-pvc-block-<worker_node_name>` | Provides a worker for each node where the HPP is designated to run. The pods mount the specified backing storage on the node. |
| `daemonset/hostpath-provisioner-csi` | Implements the Container Storage Interface (CSI) driver interface of the HPP. |
| `daemonset/hostpath-provisioner` | Implements the legacy driver interface of the HPP. |