{%- set _mod_docs_content_type = "CONCEPT" %}
# Machine sets that place machines on Dedicated Hosts {id="machineset-dedicated-hosts_{{ context }}"}

You can configure machine sets to place machines on {{ aws_first }} Dedicated Hosts. Dedicated Hosts are physical servers with instance capacity that is fully dedicated to your use. You can use Dedicated Hosts with your existing per-socket, per-core, or per-VM software licenses. With dynamic host allocation, the Machine API Operator requests a Dedicated Host from {{ aws_short }} and applies the specified tags to the Dedicated Host. {._abstract}

{%- set FeatureName = "{{ aws_short }} Dedicated Host support" %}
{% include "./snippets/technology-preview.md" %}