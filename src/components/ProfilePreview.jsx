import React from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard";

import ReactMarkdown from "react-markdown";

const ProfilePreview = ({
    profile,
    versionControl,
    languages,
    database,
    framework,
    social,
    badgeType,
    leetcodeUsername,
}) => {

    let about = profile && profile.about ? profile.about.split("\n") : [];
  return ( 
    <>
      <div className="mt-4 md:mt-8">
        <div className="text-center">
            <span className="bg-slate-700 text-slate-50 m-2 p-1 rounded-lg">
                Code
            </span>
        </div>

        <div className="text-slate-100 bg-slate-800 rounded-lg p-2 md:p-4">
            {!(profile.name === "") && (
                <>
                    {`<div align="center"><h1>`} Hi, i am{" "}
                    {`<img src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif" width="32px"/>`}{" "}
                    {profile.name} {`</h1> </div>`}
                    <br />
                    <br />
                </>
            )}

            {!(profile.about === "") && (
                <>
                    # About Me
                    <br />
                    {about.map((element) => (
                        <p>{element}</p>
                    ))}
                    <br />
                </>
            )}
            <br /># Tech Stack <br />

            {/* language */}
            {languages.map(
                (badge) =>
                    badge.isSelected && (
                        <span key={badge.name}>
                            ![{badge.name}](
                            {"https://img.shields.io/badge/" +
                                badge.image +
                                "&style=" +
                                badgeType}
                            ) <br />
                        </span>
                    )
            )}

            {/* framework and library */}
            {framework.map(
                (badge) =>
                    badge.isSelected && (
                        <span key={badge.name}>
                            ![{badge.name}](
                            {"https://img.shields.io/badge/" +
                                badge.image +
                                "&style=" +
                                badgeType}
                            ) <br />
                        </span>
                    )
            )}

            {/* database */}
            {database.map(
                (badge) =>
                    badge.isSelected && (
                        <span key={badge.name}>
                            ![{badge.name}](
                            {"https://img.shields.io/badge/" +
                                badge.image +
                                "&style=" +
                                badgeType}
                            ) <br />
                        </span>
                    )
            )}

            {/* version control */}
            {versionControl.map(
                (badge) =>
                    badge.isSelected && (
                        <span key={badge.name}>
                            ![{badge.name}](
                            {"https://img.shields.io/badge/" +
                                badge.image +
                                "&style=" +
                                badgeType}
                            ) <br />
                        </span>
                    )
            )}

            {/* socials */}
            {social.map(
                (badge) =>
                    badge.isSelected && (
                        <span key={badge.name}>
                            ![{badge.name}](
                            {"https://img.shields.io/badge/" +
                                badge.image +
                                "&style=" +
                                badgeType}
                            ) <br />
                        </span>
                    )
            )}
            <br />
            {!(profile.username === "") && (
                <>
                    # GitHub Stats : <br />
                    ![](https://github-readme-stats.vercel.app/api?username=
                    {profile.username}
                    &hide_border=false&include_all_commits=false&count_private=false)
                    <br />
                    ![](https://github-readme-streak-stats.herokuapp.com/?user=
                    {profile.username}&hide_border=false)
                    <br />
                    ![](https://github-readme-stats.vercel.app/api/top-langs/?username=
                    {profile.username}
                    &hide_border=false&include_all_commits=false&count_private=false&layout=compact)
                    <br />
                </>
            )}
            <br />

            {/* leetcode */}
            [![LeetCode
            Profile](https://img.shields.io/badge/LeetCode-Profile-orange?style=flat-square&logo=leetcode)](https://leetcode.com/YourUsername/)
            <br />
            <br />
            {!(profile.username === "") && (
                <>
                    [![](https://visitcount.itsvg.in/api?id=
                    {profile.username}
                    &icon=0&color=0)](https://visitcount.itsvg.in)
                </>
            )}
            {" Happy Coding 🚀🔥"}
            <br />
        </div>
      </div>

        {/* Preview */}
        <div className="mt-4 md:mt-8 text-xl">
            <div className="text-center">
                <span className="bg-slate-700 text-slate-50 m-2 p-1 rounded-lg">
                    Preview
                </span>
            </div>
            <div className="text-slate-800 bg-slate-100 rounded-lg p-2 md:p-4">
                {!(profile.name === "") && (
                    <div className="text-2xl lg:text-4xl font-medium flex flex-row justify-center mb-4">
                        <div align="center flex flex-row justify-center">
                            Hi, i am{" "}
                            <img
                                src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif"
                                className="w-8 inline-block"
                                alt="hi"
                            />{" "}
                            {profile.name}
                        </div>
                    </div>
                )}

                {!(profile.about === "") && (
                    <>
                        <div className="text-2xl font-medium mt-4">
                            About Me
                        </div>
                        <ReactMarkdown
                            className="my-1"
                            children={profile.about}
                        />
                    </>
                )}

                <div className="text-2xl font-medium mt-4">Tech Stack</div>
                <div className="flex flex-row gap-1 text-2xl flex-wrap mt-4">
                    {languages.map(
                        (badge) =>
                            badge.isSelected && (
                                <img
                                    src={
                                        "https://img.shields.io/badge/" +
                                        badge.image +
                                        "&style=" +
                                        badgeType
                                    }
                                    key={badge.name}
                                    alt="badge"
                                />
                            )
                    )}
                    {framework.map(
                        (badge) =>
                            badge.isSelected && (
                                <img
                                    src={
                                        "https://img.shields.io/badge/" +
                                        badge.image +
                                        "&style=" +
                                        badgeType
                                    }
                                    key={badge.name}
                                    alt="badge"
                                />
                            )
                    )}
                    {database.map(
                        (badge) =>
                            badge.isSelected && (
                                <img
                                    src={
                                        "https://img.shields.io/badge/" +
                                        badge.image +
                                        "&style=" +
                                        badgeType
                                    }
                                    key={badge.name}
                                    alt="badge"
                                />
                            )
                    )}
                    {versionControl.map(
                        (badge) =>
                            badge.isSelected && (
                                <img
                                    src={
                                        "https://img.shields.io/badge/" +
                                        badge.image +
                                        "&style=" +
                                        badgeType
                                    }
                                    key={badge.name}
                                    alt="badge"
                                />
                            )
                    )}
                    {social.map(
                        (badge) =>
                            badge.isSelected && (
                                <img
                                    src={
                                        "https://img.shields.io/badge/" +
                                        badge.image +
                                        "&style=" +
                                        badgeType
                                    }
                                    key={badge.name}
                                    alt="badge"
                                />
                            )
                    )}
                </div>

                {!(profile.username === "") && (
                    <>
                        <div className="text-2xl font-medium mt-4">
                            Github Stats
                        </div>
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${profile.username}&hide_border=false&include_all_commits=false&count_private=false&theme=gruvbox`}
                            alt="stats"
                        />
                        <img
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${profile.username}&hide_border=false&theme=gruvbox`}
                            alt="stats"
                        />
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.username}&hide_border=false&include_all_commits=false&count_private=false&layout=compact&theme=gruvbox`}
                            alt="stats"
                        />
                    </>
                )}

                {/* Leetcode */}

                {!(leetcodeUsername === "") && (
                    <>
                        <div className="text-2xl font-medium mt-4">
                            LeetCode Stats
                        </div>
                        <a
                            href={`https://leetcode-stats-six.vercel.app/?username=${leetcodeUsername}&theme=dark`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={`https://leetcode-stats-six.vercel.app/?username=${leetcodeUsername}&theme=dark`}
                                alt="LeetCode stats"
                            />
                        </a>
                    </>
                )}
                {!(profile.username === "") && (
                    <img
                        src={
                            "https://visitcount.itsvg.in/api?id=" +
                            profile.username
                        }
                        alt="stats"
                    />
                )}
            </div>
        </div>
    </>
  )
}

export default ProfilePreview
