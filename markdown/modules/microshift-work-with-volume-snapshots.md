{%- set _mod_docs_content_type = "CONCEPT" %}
# Work with volume snapshots {id="microshift-work-with-volume-snapshots_{{ context }}"}

Volume snapshots on {{ microshift_short }} let you capture the state of a persistent volume at a point in time. You can use snapshots to back up application data, restore volumes to a previous state, and clone volumes for testing or migration. {{ microshift_short }} uses LVMS-backed CSI snapshot support to create and manage volume snapshot resources.