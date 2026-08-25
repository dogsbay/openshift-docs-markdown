{%- set _mod_docs_content_type = "CONCEPT" %}
# Disk replacement {id="troubleshooting-bmn-replace-disk_{{ context }}"}

If you do not have disk redundancy configured on your node through hardware or software redundant array of independent disks (RAID), you need to check the following: {._abstract}

*   Does the disk contain running pod images?
*   Does the disk contain persistent data for pods?

For more information, see "{{ product_title }} storage overview" in _Storage_.