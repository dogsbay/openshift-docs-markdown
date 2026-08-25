{%- set _mod_docs_content_type = "CONCEPT" %}
# Azure File cross-subscription support {id="persistent-storage-csi-azure-file-cross-sub-overview_{{ context }}"}

Cross-subscription support allows you to have an {{ product_title }} cluster in one Azure subscription and mount your Azure file share in another Azure subscription by using the Azure File Container Storage Interface (CSI) driver. {._abstract}


:::important

Both the {{ product_title }} cluster and the Azure File share (pre-provisioning or to be provisioned) should be inside the same tenant.

:::