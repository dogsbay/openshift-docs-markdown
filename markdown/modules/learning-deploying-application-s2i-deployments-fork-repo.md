{%- set _mod_docs_content_type = "PROCEDURE" %}
# Fork the OSToy repository {id="learning-deploying-application-s2i-deployments-fork-repo_{{ context }}"}

To trigger automated builds based on changes to the source code, you must fork the OSToy repository and set up a GitHub webhook. The webhook triggers S2I builds when you push code into your GitHub repository.  {._abstract}

**Procedure**

*   To set up the webhook, you must first [Create a new fork](https://github.com/openshift-cs/ostoy/fork).

    :::important

    Replace `<UserName>` with your own GitHub username for the following URLs in this guide.
    
    :::