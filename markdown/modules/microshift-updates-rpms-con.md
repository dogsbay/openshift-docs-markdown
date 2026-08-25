{%- set _mod_docs_content_type = "CONCEPT" %}
# About updates using RPMs {id="microshift-updates-rpms-con_{{ context }}"}

Updating {{ product_title }} for non-image-based {{ op_system_base_full }} systems requires updating the RPMs. {._abstract}

*   For patch releases, such as {{ product_version }}.1 to {{ product_version }}.2, simply update the RPMs.
*   For minor-version release updates, add the step of enabling the compatible update repository by using your subscription manager.


:::note

You can back up application data as needed and move the data copy to a secure location when using any update type.

:::