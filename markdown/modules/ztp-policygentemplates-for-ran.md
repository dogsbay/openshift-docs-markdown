{%- set _mod_docs_content_type = "CONCEPT" %}
# {{ policy_gen_cr }} CRs for RAN deployments {id="ztp-policygentemplates-for-ran_{{ context }}"}

Use `{{ policy_gen_cr }}`{minja} custom resources (CRs) to customize the configuration applied to the cluster by using the {{ ztp_first }} pipeline. The `{{ policy_gen_cr }}`{minja} CR allows you to generate one or more policies to manage the set of configuration CRs on your fleet of clusters. The `{{ policy_gen_cr }}`{minja} CR identifies the set of managed CRs, bundles them into policies, builds the policy wrapping around those CRs, and associates the policies with clusters by using label binding rules. {._abstract}

The reference configuration, obtained from the {{ ztp }} container, is designed to provide a set of critical features and node tuning settings that ensure the cluster can support the stringent performance and resource utilization constraints typical of RAN (Radio Access Network) Distributed Unit (DU) applications. Changes or omissions from the baseline configuration can affect feature availability, performance, and resource utilization. Use the reference `{{ policy_gen_cr }}`{minja} CRs as the basis to create a hierarchy of configuration files tailored to your specific site requirements.

The baseline `{{ policy_gen_cr }}`{minja} CRs that are defined for RAN DU cluster configuration can be extracted from the {{ ztp }} `ztp-site-generate` container. See "Preparing the {{ ztp }} site configuration repository" for further details.

The `{{ policy_gen_cr }}`{minja} CRs can be found in the `./{{ argocd_folder }}`{minja} folder. The reference architecture has common, group, and site-specific configuration CRs. Each `{{ policy_gen_cr }}`{minja} CR refers to other CRs that can be found in the `./out/source-crs` folder.

The `{{ policy_gen_cr }}`{minja} CRs relevant to RAN cluster configuration are described below. Variants are provided for the group `{{ policy_gen_cr }}`{minja} CRs to account for differences in single-node, three-node compact, and standard cluster configurations. Similarly, site-specific configuration variants are provided for single-node clusters and multi-node (compact or standard) clusters. Use the group and site-specific configuration variants that are relevant for your deployment.

**{{ policy_gen_cr }} CRs for RAN deployments**

| {{ policy_gen_cr }} CR | Description |
| --- | --- |
| `{{ policy_prefix }}example-multinode-site.yaml`{minja} | Contains a set of CRs that get applied to multi-node clusters. These CRs configure SR-IOV features typical for RAN installations. |
| `{{ policy_prefix }}example-sno-site.yaml`{minja} | Contains a set of CRs that get applied to {{ sno }} clusters. These CRs configure SR-IOV features typical for RAN installations. |
| `{{ policy_prefix }}common-mno-ranGen.yaml`{minja} | Contains a set of common RAN policy configuration that get applied to multi-node clusters. |
| `{{ policy_prefix }}common-ranGen.yaml`{minja} | Contains a set of common RAN CRs that get applied to all clusters. These CRs subscribe to a set of operators providing cluster features typical for RAN as well as baseline cluster tuning. |
| `{{ policy_prefix }}group-du-3node-ranGen.yaml`{minja} | Contains the RAN policies for three-node clusters only. |
| `{{ policy_prefix }}group-du-sno-ranGen.yaml`{minja} | Contains the RAN policies for single-node clusters only. |
| `{{ policy_prefix }}group-du-standard-ranGen.yaml`{minja} | Contains the RAN policies for standard three control-plane clusters. |
| `{{ policy_prefix }}group-du-3node-validator-ranGen.yaml`{minja} | `{{ policy_gen_cr }}`{minja} CR used to generate the various policies required for three-node clusters. |
| `{{ policy_prefix }}group-du-standard-validator-ranGen.yaml`{minja} | `{{ policy_gen_cr }}`{minja} CR used to generate the various policies required for standard clusters. |
| `{{ policy_prefix }}group-du-sno-validator-ranGen.yaml`{minja} | `{{ policy_gen_cr }}`{minja} CR used to generate the various policies required for {{ sno }} clusters. |