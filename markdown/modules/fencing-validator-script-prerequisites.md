{%- set _mod_docs_content_type = "CONCEPT" %}
# Fencing validator script prerequisites {id="fencing-validator-script-prerequisites_{{ context }}"}

Use the `fencing_validator` script to verify your fencing configuration on a two-node {{ product_title }} cluster. This script, deployed automatically by the Machine Config Operator, ensures that power management interfaces are correctly configured to prevent data corruption during a node failure. To run it, ensure the `jq` utility is installed, and you have both Kubernetes API access (`oc`) and SSH access to the control-plane nodes. {._abstract}

You can see what the script would do without actually performing any validation for TNF by running the following command:

```terminal
$ oc debug node/<node_name> --chroot /host /usr/local/bin/fencing_validator --dry-run
```