{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand update channels and releases {id="understand-update-channels-and-releases-intro_{{ context }}"}

Update channels are how users declare the {{ product_title }} major or minor version they intend to update their clusters to. They also allow users to choose the timing and level of support their updates will have through the `fast`, `stable`, `candidate`, and `eus` channel options. {._abstract}

The Cluster Version Operator uses an update graph based on the channel declaration, along with other conditional information, to provide a list of recommended and conditional updates available to the cluster.