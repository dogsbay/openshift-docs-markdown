{%- set _mod_docs_content_type = "CONCEPT" %}
# KMM hub and spoke {id="kmm-hub-hub-and-spoke_{{ context }}"}

In {{ rh_rhacm }} hub-and-spoke deployments, the KMM-Hub controller offloads kernel module building and signing to the hub cluster. Administrators can use the `ManagedClusterModule` custom resource (CR) to load modules on spoke clusters while preserving resources on managed nodes. {._abstract}

In hub and spoke setups, spokes are focused, resource-constrained clusters that are centrally managed by a hub cluster. Spokes run the single-cluster edition of KMM, with those resource-intensive features disabled. To adapt KMM to this environment, you should reduce the workload running on the spokes to the minimum, while the hub takes care of the expensive tasks.

Building kernel module images and signing the `.ko` files, should run on the hub. The scheduling of the Module Loader and Device Plugin `DaemonSets` can only happen on the spokes.